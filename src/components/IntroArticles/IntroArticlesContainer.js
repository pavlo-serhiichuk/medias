import React, {useEffect} from 'react';
import {Wrapper} from './IntroArticles.styles'
import IntroArticles from "./IntroArticles.component";
import {useSelector, useDispatch} from "react-redux";
import {getAsyncArticles} from "../../redux/articlesReducer";
import {hideSidebar} from "../../redux/sidebarReducer";

const IntroArticlesContainer = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)
    const isLoading = useSelector(state => state.auth.isLoading)

    useEffect(() => {
        document.title = 'Articles| Medias'
        dispatch(getAsyncArticles())
        dispatch(hideSidebar())
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <Wrapper>
            <IntroArticles articles={articles}/>
        </Wrapper>
    );
};

export default IntroArticlesContainer;