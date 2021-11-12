import React from 'react';

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
    const response = await fetch('http://localhost:3001/articles')
    const jsonArticles = await response.json()
    dispatch(getArticles(jsonArticles))
}

export const getAsyncFullArticle = (articleID) => async (dispatch) => {
    const response = await fetch(`http://localhost:3001/article?id=${articleID}`)
    const jsonArticle = await response.json()
    dispatch(setFullArticle(jsonArticle))
}

export default articlesReducer;