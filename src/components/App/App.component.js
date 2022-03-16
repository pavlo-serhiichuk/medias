import React, {lazy, Suspense} from "react";
import {Route} from "react-router-dom";
import {GiHamburgerMenu as Hamburger} from "react-icons/gi";

import {Wrapper, Content, Routers} from "./App.styles";

import API from "../../api/routerApi";

import Footer from "../Footer/Footer.component";
import Profile from "../Profile/Profile.component";
import Sidebar from "../Sidebar/Sidebar.component";
import CartContainer from "../Cart/CartContainer";
import LoginPopup from "../LoginPopup/LoginPopup.component";
import SignInContainer from "../SignIn/SignInContainer";
import HeaderContainer from "../Header/HeaderContainer";
import WishesContainer from "../Wishes/WishesContainer";
import MoreInfoContainer from "../MoreInfo/MoreInfoContainer";
import FullArticleContainer from "../FullArticle/FullArticleContainer";
import IntroArticlesContainer from "../IntroArticles/IntroArticlesContainer";
import {BottomAnchor, GoBottom, GoTop, TopAnchor} from "../common/QuickScrolls/QuickScrolls.component";
import Alert from "../common/Alert/Alert";
import {LeftBtn} from "../Sidebar/Sidebar.style";
import PhotosPopup from "../PhotosPopup/PhotosPopup.component";

const ProductsContainer = lazy(() => import("../Products/ProductsContainer"))

function App ({
                 query,
                 isSignInModalOpen,
                 isLoginModalOpen,
                 isMoreInfoModalOpen,
                 open,
                 isSidebarOpen,
                 isPhotosPopupOpen,
                 isAlertOpen
             }) {

    return (
        <>
            <Wrapper>
                {isAlertOpen && <Alert />}
                <TopAnchor/>
                <GoTop/>
                <HeaderContainer />
                <Content>
                    {
                        isSidebarOpen
                            ? <Sidebar/>
                            : <LeftBtn onClick={open}><Hamburger size={25}/></LeftBtn>
                    }
                    <Routers>
                        <Suspense fallback={'Loading...'}>
                            <Route path={API.books.path} render={() => <ProductsContainer/>}/>
                            <Route path={API.guitars.path} render={() => <ProductsContainer/>}/>
                            <Route path={API.vouchers.path} render={() => <ProductsContainer/>}/>
                            <Route path={API.filtered.path} render={() => <ProductsContainer id={query.get("id")}/>}/>
                        </Suspense>
                        <Route path={API.profile.path} render={() => <Profile/>}/>
                        <Route path={API.wishes.path} render={() => <WishesContainer/>}/>
                        <Route path={API.cart.path} render={() => <CartContainer/>}/>
                        <Route exact path='/articles' render={() => <IntroArticlesContainer/>}/>
                        <Route path='/articles/article/:articleId' render={() => <FullArticleContainer />}/>
                    </Routers>
                </Content>
                <GoBottom/>
                <BottomAnchor/>
            </Wrapper>
            <Footer/>

            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isPhotosPopupOpen && <PhotosPopup/>}
            {isLoginModalOpen && <LoginPopup/>}
            {isSignInModalOpen && <SignInContainer/>}
        </>
    );
}

export default App;
