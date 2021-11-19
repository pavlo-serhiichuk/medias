import React, {useEffect} from 'react';
import FullArticle from "./FullArticle.component";
import {useDispatch, useSelector} from "react-redux";
import {getAsyncFullArticle} from "../../redux/articlesReducer";

const FullArticleContainer = ({id}) => {
    const dispatch = useDispatch()
    const fullArticle = useSelector(state => state.articles.fullArticle)
    const isFetching = useSelector(state => state.auth.isFetching)

    useEffect(() => {
        dispatch(getAsyncFullArticle(id))
    }, [])

    if (isFetching) return <div>Loading...</div>

    return (
        <>
            <FullArticle fullArticle={fullArticle}/>
        </>
    );
};

export default FullArticleContainer;
