import React, {useEffect} from 'react';
import {Wrapper} from './Articles.styles'
import Articles from "./Articles.component";
import {useSelector, useDispatch} from "react-redux";
import {getAsyncArticles, getCurrentAsyncArticle} from "../../redux/articlesReducer";

const ArticlesContainer = () => {

    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles.articles)
    const openArticle = (articleID) => dispatch(getCurrentAsyncArticle(articleID))

    useEffect(() => {
        document.title = 'Articles| Medias'
        dispatch(getAsyncArticles())

    }, [])

    return (
        <Wrapper>
            <Articles articles={articles} openArticle={openArticle}/>
        </Wrapper>
    );
};

export default ArticlesContainer;