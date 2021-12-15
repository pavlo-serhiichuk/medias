import React, {useEffect} from 'react';
import {Wrapper} from './IntroArticles.styles'
import IntroArticles from "./IntroArticles.component";
import {useSelector, useDispatch} from "react-redux";
import {getAsyncArticles} from "../../redux/articlesReducer";
import {closeFilters} from "../../redux/filterReducer";

const IntroArticlesContainer = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)
    const isLoading = useSelector(state => state.auth.isLoading)

    // dispatch(closeFilters())

    useEffect(() => {
        document.title = 'Articles| Medias'
        console.log('render Intro Article')
        dispatch(getAsyncArticles())
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <Wrapper>
            <IntroArticles articles={articles}/>
        </Wrapper>
    );
};

export default IntroArticlesContainer;