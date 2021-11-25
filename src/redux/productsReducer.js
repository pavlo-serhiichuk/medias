import {productsAPI} from "../api/api";
import {hideLoading, showLoading} from "./authReducer";

const GET_BOOKS = 'GET_BOOKS'
const GET_GUITARS = 'GET_GUITARS'
const GET_TRAVELING = 'GET_TRAVELING'
const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

const initialState = {
    category: 'books',
    products: [],
    elementID: null,
    isBought: false,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {...state, products: action.payload}
        case GET_GUITARS:
            return {...state, products: action.payload}
        case GET_TRAVELING:
            return {...state, products: action.payload}
        case CHANGE_CATEGORY:
            return {...state, category: action.payload}
        default:
            return state
    }
}

const getBooks = books => ({type: GET_BOOKS, payload: books})
const getGuitars = guitars => ({type: GET_GUITARS, payload: guitars})
const getTraveling = traveling => ({type: GET_TRAVELING, payload: traveling})
export const changeCategory = category => ({type: CHANGE_CATEGORY, payload: category})

const request = (requestType, actionReducer) => async dispatch => {
    dispatch(showLoading())
    const response = await requestType()
    dispatch(actionReducer(response))
    dispatch(hideLoading())
}

export const getAsyncBooks = () => request(productsAPI.getBooks, getBooks)
export const getAsyncGuitars = () => request(productsAPI.getGuitars, getGuitars)
export const getAsyncTraveling = () => request(productsAPI.getTraveling, getTraveling)
