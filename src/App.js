import './index.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import BooksContainer from "./components/Books/BooksContainer";
import Header from "./components/Header/Header";
import {Content} from "./App.styles";
import CartContainer from "./components/Cart/CartContainer";
import Footer from "./components/Footer/Footer.component";
import LoginContainer from "./components/Login/LoginContainer";
import SignInContainer from "./components/SignIn/SignInContainer";
import IntroArticlesContainer from "./components/Articles/IntroArticlesContainer";
import FullArticleContainer from "./components/FullArticle/FullArticleContainer";
import MoreInfoContainer from "./components/MoreInfo/MoreInfoContainer";

// const IntroArticlesContainer = React.lazy(() => import("./components/Articles/IntroArticlesContainer"))

function App({query, isSignInModalOpen, isLoginModalOpen, isMoreInfoModalOpen}) {
    return (
        <>
            <Content>
                <Header/>
                    <Route exact path="/" render={() => <BooksContainer/>}/>
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
