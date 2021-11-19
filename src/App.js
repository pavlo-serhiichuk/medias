import './index.css';
import React from "react";
import {Route} from "react-router-dom";
import {Content} from "./App.styles";
import BooksContainer from "./components/BooksContainer/BooksContainer";
import GuitarsContainer from "./components/GuitarsContainer/GuitarsContainer";
import Header from "./components/Header/Header";
import CartContainer from "./components/Cart/CartContainer";
import Footer from "./components/Footer/Footer.component";
import LoginContainer from "./components/Login/LoginContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import IntroArticlesContainer from "./components/IntroArticles/IntroArticlesContainer";
import FullArticleContainer from "./components/FullArticle/FullArticleContainer";
import MoreInfoContainer from "./components/MoreInfo/MoreInfoContainer";

function App({query, isSignInModalOpen, isLoginModalOpen, isMoreInfoModalOpen}) {
    return (
        <>
            <Content>
                <Header/>
                    <Route exact path="/" render={() => <BooksContainer/>}/>
                    <Route exact path="/guitars" render={() => <GuitarsContainer/>}/>
                    <Route path="/cart" render={() => <CartContainer/>}/>
                    <Route path="/articles" render={() => <IntroArticlesContainer/>}/>
                    <Route path="/article" render={() => <FullArticleContainer id={query.get("id")}/>}/>
            </Content>
            <Footer/>

            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isLoginModalOpen && <LoginContainer/>}
            {isSignInModalOpen && <SignInContainer/>}
        </>
    );
}

export default App;
