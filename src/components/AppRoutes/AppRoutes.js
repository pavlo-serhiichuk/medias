import React, {lazy, Suspense} from 'react';
import {Route, Redirect} from "react-router-dom";
import API from "../../api/routerApi";
import Profile from "../Profile/Profile.component";
import WishesContainer from "../Wishes/WishesContainer";
import CartContainer from "../Cart/CartContainer";
import IntroArticlesContainer from "../IntroArticles/IntroArticlesContainer";
import FullArticleContainer from "../FullArticle/FullArticleContainer";
import {Routers} from "../App/App.styles";
import useQuery from "../../hooks/useQuery";
import {useSelector} from "react-redux";

const ProductsContainer = lazy(() => import("../Products/ProductsContainer"))

const AppRoutes = () => {
    let query = useQuery();
    const isAuth = useSelector(state => state.auth.isAuth)
    return (
            <Routers>
                <><Suspense fallback={'Loading...'}>
                        <Route path={API.books.path} render={() => <ProductsContainer/>}/>
                        <Route path={API.guitars.path} render={() => <ProductsContainer/>}/>
                        <Route path={API.vouchers.path} render={() => <ProductsContainer/>}/>
                        <Route path={API.filtered.path} render={() => <ProductsContainer id={query.get("id")}/>}/>
                    </Suspense>
                        <Route path={API.profile.path} render={() => <Profile/>}/>
                    {
                        isAuth
                            ? <Route path={API.wishes.path} render={() => <WishesContainer/>}/>
                            : <Route
                                path="*"
                                element={<Redirect to="/books"  />}
                            />
                    }
                        <Route path={API.cart.path} render={() => <CartContainer/>}/>
                        <Route exact path='/articles' render={() => <IntroArticlesContainer/>}/>
                        <Route path='/articles/article/:articleId' render={() => <FullArticleContainer />}/></>



            </Routers>
    );
};

export default AppRoutes;