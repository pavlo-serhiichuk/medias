import React from 'react';
import {articlesAPI} from "../api/api";

const GET_ARTICLES = 'GET_ARTICLES'
const SET_FULL_ARTICLE = 'SET_FULL_ARTICLE'

const initialState = {
    articles: [],
    fullArticle: {},
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return {...state, articles: action.payload}
        case SET_FULL_ARTICLE:
            return {...state, fullArticle: action.payload}
        default:
            return state
    }
}

const getArticles = articles => ({type: GET_ARTICLES, payload: articles})
const setFullArticle = (fullArticle) => ({type: SET_FULL_ARTICLE, payload: fullArticle})

export const getAsyncArticles = () => async (dispatch) => {
    const response = await articlesAPI.getArticles()
    dispatch(getArticles(response))
}

export const getAsyncFullArticle = (articleID) => async (dispatch) => {
    const response = articlesAPI.getFullArticle(articleID)
    dispatch(setFullArticle(response))
}

export default articlesReducer;