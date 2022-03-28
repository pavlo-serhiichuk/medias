import React, {useEffect} from 'react';
import FullArticle from "./FullArticle.component";
import {useDispatch, useSelector} from "react-redux";
import {getAsyncFullArticle} from "../../redux/articlesReducer";
import {useParams} from "react-router-dom";

const FullArticleContainer = () => {
    const {articleId} = useParams()
    const dispatch = useDispatch()
    const fullArticle = useSelector(state => state.articles.fullArticle)
    const isLoading = useSelector(state => state.auth.isLoading)

    useEffect(() => {
        dispatch(getAsyncFullArticle(+articleId))
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <FullArticle fullArticle={fullArticle}/>
        </>
    );
};

export default FullArticleContainer;
