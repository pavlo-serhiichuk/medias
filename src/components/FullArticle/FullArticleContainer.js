import React, {useEffect} from 'react';
import FullArticle from "./FullArticle.component";
import {useDispatch, useSelector} from "react-redux";
import {getAsyncFullArticle} from "@Redux/articlesReducer";

const FullArticleContainer = ({id}) => {
    const dispatch = useDispatch()
    const fullArticle = useSelector(state => state.articles.fullArticle)
    const isLoading = useSelector(state => state.auth.isLoading)

    useEffect(() => {
        dispatch(getAsyncFullArticle(id))
    }, [])

    if (isLoading) return <div>Loading...</div>

    return (
        <>
            <FullArticle fullArticle={fullArticle}/>
        </>
    );
};

export default FullArticleContainer;
