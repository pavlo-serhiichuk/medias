import React, {lazy, Suspense} from "react";
import {Route} from "react-router-dom";
import {GiHamburgerMenu as Hamburger} from "react-icons/gi";
import './index.css';
import {Wrapper, Content} from "./App.styles";

import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile.component";
import Sidebar from "./components/Sidebar/Sidebar.component";
import CartContainer from "./components/Cart/CartContainer";
import LoginContainer from "./components/Login/LoginContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import WishesContainer from "./components/Wishes/WishesContainer";
import MoreInfoContainer from "./components/MoreInfo/MoreInfoContainer";
import FullArticleContainer from "./components/FullArticle/FullArticleContainer";
import IntroArticlesContainer from "./components/IntroArticles/IntroArticlesContainer";
import {BottomAnchor, GoBottom, GoTop, TopAnchor} from "./components/common/QuickScrolls/QuickScrolls.component";
import API from "./api/routerApi";
import {Routers} from "./AppContainer";
import Alert from "./components/common/Alert/Alert";
import {LeftBtn} from "./components/Sidebar/Sidebar.style";
import PhotosPopup from "./components/PhotosPopup/PhotosPopup.component";

const ProductsContainer = lazy(() => import("./components/Products/ProductsContainer"))

function App({
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
                <Header/>
                <Content>
                    {
                        isSidebarOpen
                            ? <Sidebar/>
                            : <LeftBtn onClick={() => open()}><Hamburger size={25}/></LeftBtn>
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
                        <Route path={API.articles.path} render={() => <IntroArticlesContainer/>}/>
                        <Route path={API.article.path} render={() => <FullArticleContainer id={query.get("id")}/>}/>
                    </Routers>
                </Content>
                <GoBottom/>
                <BottomAnchor/>
            </Wrapper>
            <Footer/>

            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isPhotosPopupOpen && <PhotosPopup/>}
            {isLoginModalOpen && <LoginContainer/>}
            {isSignInModalOpen && <SignInContainer/>}
        </>
    );
}

export default App;
