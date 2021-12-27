import React, {lazy, Suspense} from "react";
import {Route} from "react-router-dom";
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
import {BottomAnchor, GoBottom, GoTop, TopAnchor} from "./common/QuickScrolls/QuickScrolls.component";

import {Routers} from "./AppContainer";
import {GiHamburgerMenu as Hamburger} from "react-icons/gi";
import {LeftBtn} from "./components/Sidebar/Sidebar.style";

const ProductsContainer = lazy(() => import("./components/Products/ProductsContainer"))

function App({query, isSignInModalOpen, isLoginModalOpen, isMoreInfoModalOpen, open, isSidebarOpen}) {

    return (
        <>
            <Wrapper>
                <TopAnchor/>
                <GoBottom/>
                <Header/>
                <Content>
                    {
                        isSidebarOpen
                            ? <Sidebar/>
                            : <LeftBtn onClick={() => open()}><Hamburger size={25}/></LeftBtn>
                    }
                    <Routers>
                        <Suspense fallback={'Loading...'}>
                            <Route path="/books" render={() => <ProductsContainer/>}/>
                            <Route path="/guitars" render={() => <ProductsContainer/>}/>
                            <Route path="/vouchers" render={() => <ProductsContainer/>}/>
                            <Route path="/filtered" render={() => <ProductsContainer id={query.get("id")}/>}/>
                        </Suspense>
                        <Route path="/profile" render={() => <Profile/>}/>
                        <Route path="/wishes" render={() => <WishesContainer/>}/>
                        <Route path="/cart" render={() => <CartContainer/>}/>
                        <Route path="/articles" render={() => <IntroArticlesContainer/>}/>
                        <Route path="/article" render={() => <FullArticleContainer id={query.get("id")}/>}/>
                    </Routers>
                </Content>
                <GoTop/>
                <BottomAnchor/>
            </Wrapper>
            <Footer/>

            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isLoginModalOpen && <LoginContainer/>}
            {isSignInModalOpen && <SignInContainer/>}
        </>
    );
}

export default App;
