import './index.css';
import React from "react";
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
import {Routers} from "./AppContainer";
import NativeFiltersContainer from "./components/NativeFilters/NativeFiltersContainer";

function App({query, isSignInModalOpen, isLoginModalOpen, isMoreInfoModalOpen, isFiltersOpen}) {

    const books = [
        {price: 432, title: 'fsfds'},
        {price: 32, title: 'fsfds'},
        {price: 43, title: 'fsfds'},
        {price: 422, title: 'fsfds'}
    ]

    let filteredBooks = books.sort((a, b) => a.price - b.price)

    console.log("filteredBooks: ")
    console.log(filteredBooks)
    return (
        <>
            <Wrapper>
                <Header/>
                <Content>
                    <Sidebar/>
                    <Routers>
                        {isFiltersOpen && <NativeFiltersContainer />}
                        <Route path="/books" render={() => <ProductsContainer/>}/>
                        <Route path="/guitars" render={() => <ProductsContainer/>}/>
                        <Route path="/vouchers" render={() => <ProductsContainer />}/>
                        <Route path="/filtered" render={() => <ProductsContainer id={query.get("id")}/>}/>
                        <Route path="/profile" render={() => <Profile />}/>
                        <Route path="/wishes" render={() => <WishesContainer/>}/>
                        <Route path="/cart" render={() => <CartContainer/>}/>
                        <Route path="/articles" render={() => <IntroArticlesContainer/>}/>
                        <Route path="/article" render={() => <FullArticleContainer id={query.get("id")}/>}/>
                    </Routers>
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
