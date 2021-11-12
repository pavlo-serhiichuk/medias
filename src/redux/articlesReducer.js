import React from 'react';

const GET_ARTICLES = 'GET_ARTICLES'
const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE'

const initialState = {
    articles: [],
    currentArticle: {},
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return {...state, articles: action.payload, currentArticle: action.payload[0]}
        case SET_CURRENT_ARTICLE:
            return {...state, currentArticle: action.payload}
        default:
            return state
    }
}

const getArticles = articles => ({type: GET_ARTICLES, payload: articles})
const setCurrentArticle = (currentArticle) => ({type: SET_CURRENT_ARTICLE, payload:currentArticle})

export const getAsyncArticles = () => async (dispatch) => {
        const response = await fetch('http://localhost:3001/articles')
        const jsonArticles = await response.json()
        dispatch(getArticles(jsonArticles))
}

export const getCurrentAsyncArticle = (articleID) => async (dispatch) => {
    const response = await fetch(`http://3001/article?id=${articleID}`)
    const jsonArticle = await response.json()
    dispatch(setCurrentArticle(jsonArticle))

}

export default articlesReducer;