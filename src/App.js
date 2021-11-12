import './index.css';
import React from "react";
import {useSelector} from "react-redux";
import {Route, Switch, useLocation} from "react-router-dom";
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

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App(props) {

    let query = useQuery();

    const isSignInModalOpen = useSelector(state => state.modal.isSighInModalOpen)
    const isLoginModalOpen = useSelector(state => state.modal.isLoginModalOpen)
    const isMoreInfoModalOpen = useSelector(state => state.modal.isMoreInfoModalOpen)
    return (
        <div>
            <Content>
                <Header/>
                <Switch>
                    <Route exact path="/" render={() => <BooksContainer/>}/>
                    <Route path="/cart" render={() => <CartContainer/>}/>
                    <Route path="/articles" render={() => <IntroArticlesContainer/>}/>
                    <Route path="/article" render={() => <FullArticleContainer id={query.get("id")}/>}/>
                </Switch>
            </Content>
            <Footer/>

            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isLoginModalOpen && <LoginContainer/>}
            {isSignInModalOpen && <SignInContainer/>}
        </div>
    );
}

export default App;
