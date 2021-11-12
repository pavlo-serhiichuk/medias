import React, {useEffect} from 'react';
import CurrentArticle from "./FullArticle.component";
import {useDispatch, useSelector} from "react-redux";

const FullArticleContainer = () => {
    const dispatch = useDispatch()
    const currentArticle = useSelector(state => state.articles.currentArticle)

    useEffect(() => {

    }, [])

    return (
        <>
            <CurrentArticle currentArticle={currentArticle}/>
        </>
    );
};

export default FullArticleContainer;
