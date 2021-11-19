import React, {useEffect} from 'react';
import {Wrapper} from './IntroArticles.styles'
import IntroArticles from "./IntroArticles.component";
import {useSelector, useDispatch} from "react-redux";
import {getAsyncArticles} from "../../redux/articlesReducer";

const IntroArticlesContainer = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)
    const isFetching = useSelector(state => state.auth.isFetching)

    useEffect(() => {
        document.title = 'Articles| Medias'
        dispatch(getAsyncArticles())
    }, [])

    if(isFetching) return <div>Loading...</div>

    return (
        <Wrapper>
            <IntroArticles articles={articles}/>
        </Wrapper>
    );
};

export default IntroArticlesContainer;