import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {closeSidebar} from "@Redux/sidebarReducer";
import {getAsyncArticles} from "@Redux/articlesReducer";
import {Wrapper} from './IntroArticles.styles'

import IntroArticles from "./IntroArticles.component";

const IntroArticlesContainer = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)
    const isLoading = useSelector(state => state.auth.isLoading)

    useEffect(() => {
        document.title = 'Articles| Medias'
        dispatch(getAsyncArticles())
        dispatch(closeSidebar())
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <Wrapper>
            <IntroArticles articles={articles}/>
        </Wrapper>
    );
};

export default IntroArticlesContainer;