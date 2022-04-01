import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import ROUTE from "../../api/routerPath";
import Profile from "../Profile/Profile.component";
import WishesContainer from "../Wishes/WishesContainer";
import CartContainer from "../Cart/CartContainer";
import IntroArticlesContainer from "../IntroArticles/IntroArticlesContainer";
import FullArticleContainer from "../FullArticle/FullArticleContainer";
import {Routers} from "../App/App.styles";
import Home from "../Home/Home.component";

const ProductsContainer = lazy(() => import("../Products/ProductsContainer"))

const AppRoutes = () => {

    return (
        <Routers>
            <Suspense fallback={'Loading...'}>
                <Routes>

                    <Route path={ROUTE.books.path} element={<ProductsContainer/>}/>
                    <Route path={ROUTE.guitars.path} element={<ProductsContainer/>}/>
                    <Route path={ROUTE.vouchers.path} element={<ProductsContainer/>}/>
                    <Route path={ROUTE.filtered.path} element={<ProductsContainer/>}/>
                    <Route path='/books/filtered' element={<ProductsContainer/>}/>
                </Routes>
            </Suspense>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path={ROUTE.profile.path} element={<Profile/>}/>
                <Route path={ROUTE.wishes.path} element={<WishesContainer/>}/>
                <Route path={ROUTE.cart.path} element={<CartContainer/>}/>
                <Route path='/articles' element={<IntroArticlesContainer/>}/>
                <Route path='/articles/article/:articleId' element={<FullArticleContainer/>}/>
            </Routes>
        </Routers>
    );
};

export default AppRoutes;