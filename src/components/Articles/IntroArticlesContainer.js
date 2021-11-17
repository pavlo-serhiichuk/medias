import React, {useEffect} from 'react';
import {Wrapper} from './IntroArticles.styles'
import IntroArticles from "./IntroArticles.component";
import {useSelector, useDispatch} from "react-redux";
import {getAsyncArticles} from "../../redux/articlesReducer";

const IntroArticlesContainer = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)

    useEffect(() => {
        document.title = 'Articles| Medias'
        dispatch(getAsyncArticles())
    }, [])

    if(articles) {
    return (
        <Wrapper>
            <IntroArticles articles={articles}/>
        </Wrapper>
    );
    } else {
        return (
            <div>Loading...</div>
        )
    }
};

export default IntroArticlesContainer;