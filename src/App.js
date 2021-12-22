import './index.css';
import React, {lazy, Suspense} from "react";
import {Route} from "react-router-dom";
import {Wrapper, Content} from "./App.styles";
import Header from "./components/Header/Header";
import CartContainer from "./components/Cart/CartContainer";
import Footer from "./components/Footer/Footer.component";
import LoginContainer from "./components/Login/LoginContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import IntroArticlesContainer from "./components/IntroArticles/IntroArticlesContainer";
import FullArticleContainer from "./components/FullArticle/FullArticleContainer";
import MoreInfoContainer from "./components/MoreInfo/MoreInfoContainer";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Profile from "./components/Profile/Profile.component";
import WishesContainer from "./components/Wishes/WishesContainer";
import {Routers} from "./AppContainer";
import {GoDown, GoTop} from "./common/QuickScrolls/QuickScrolls.component";

const ProductsContainer = lazy(() => import("./components/Products/ProductsContainer"))

function App({query, isSignInModalOpen, isLoginModalOpen, isMoreInfoModalOpen}) {

    return (
        <>
            <Wrapper>
                <GoDown/>
                <Header/>
                <Content>
                    <Sidebar/>
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
            </Wrapper>
            <Footer/>

            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isLoginModalOpen && <LoginContainer/>}
            {isSignInModalOpen && <SignInContainer/>}
        </>
    );
}

export default App;
