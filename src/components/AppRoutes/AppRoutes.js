import React, {lazy, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import API from "../../api/routerApi";
import Profile from "../Profile/Profile.component";
import WishesContainer from "../Wishes/WishesContainer";
import CartContainer from "../Cart/CartContainer";
import IntroArticlesContainer from "../IntroArticles/IntroArticlesContainer";
import FullArticleContainer from "../FullArticle/FullArticleContainer";
import {Routers} from "../App/App.styles";
import useQuery from "../../hooks/useQuery";
import {useSelector} from "react-redux";
import Home from "../Home/Home.component";

const ProductsContainer = lazy(() => import("../Products/ProductsContainer"))

const AppRoutes = () => {
    let query = useQuery();

    return (
        <Routers>

            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={API.books.path} element={<ProductsContainer/>}/>
                    <Route path={API.guitars.path} element={<ProductsContainer/>}/>
                    <Route path={API.vouchers.path} element={<ProductsContainer/>}/>
                    <Route path={API.filtered.path} element={<ProductsContainer id={query.get("id")}/>}/>
                </Routes>
            </Suspense>
            <Routes>
                <Route path='/' render={() => <Home/>}/>
                <Route path={API.profile.path} element={<Profile/>}/>
                <Route path={API.wishes.path} element={<WishesContainer/>}/>
                <Route path={API.cart.path} element={<CartContainer/>}/>
                <Route path='/articles' element={<IntroArticlesContainer/>}/>
                <Route path='/articles/article/:articleId' element={<FullArticleContainer/>}/>
            </Routes>

        </Routers>
    );
};

export default AppRoutes;