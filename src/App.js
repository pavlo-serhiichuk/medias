import './index.css';
import React, {useEffect} from "react";
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
import ProductsContainer from "./components/Products/ProductsContainer";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Profile from "./components/Profile/Profile.component";
import WishesContainer from "./components/Wishes/WishesContainer";
import FiltersContainer from "./components/Filters/FiltersContainer";

function App({query, isSignInModalOpen, isLoginModalOpen, isMoreInfoModalOpen}) {
    return (
        <>
            <Wrapper>
                <Header/>
                <Content>
                    <Sidebar/>
                    <div>
                        <FiltersContainer/>
                        <Route path="/books" render={() => <ProductsContainer/>}/>
                        <Route path="/guitars" render={() => <ProductsContainer/>}/>
                        <Route path="/vouchers" render={() => <ProductsContainer />}/>
                        <Route path="/filtered" render={() => <ProductsContainer id={query.get("id")}/>}/>
                        <Route path="/profile" render={() => <Profile />}/>
                        <Route path="/wishes" render={() => <WishesContainer/>}/>
                        <Route path="/cart" render={() => <CartContainer/>}/>
                        <Route path="/articles" render={() => <IntroArticlesContainer/>}/>
                        <Route path="/article" render={() => <FullArticleContainer id={query.get("id")}/>}/>
                    </div>
                </Content>
            </Wrapper>
            <Footer/>

            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isLoginModalOpen && <LoginContainer/>}
            {isSignInModalOpen && <SignInContainer/>}
        </>
    );
}

export default App;
