import {articlesAPI, request} from "../api/api";

const GET_ARTICLES = 'GET_ARTICLES'
const SET_FULL_ARTICLE = 'SET_FULL_ARTICLE'

const initialState = {
    articles: [],
    fullArticle: {},
}

export const articlesReducer = (state = initialState, action) => {
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

export const getAsyncArticles = () => request(articlesAPI.getArticles, getArticles)
export const getAsyncFullArticle = (articleID) => request(() => articlesAPI.getFullArticle(articleID), setFullArticle)

