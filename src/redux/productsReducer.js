import {productsAPI, request} from "../api/api";

const GET_BOOKS = 'GET_BOOKS'
const GET_GUITARS = 'GET_GUITARS'
const GET_VOUCHERS = 'GET_VOUCHERS'
const GET_COUNTRIES = 'GET_COUNTRIES'
const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

const initialState = {
    category: 'books',
    products: [],
    filteredVouchers: [],
    countries: [],
    elementID: null,
    isBought: false,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {...state, products: action.payload}
        case GET_GUITARS:
            return {...state, products: action.payload}
        case GET_VOUCHERS:
            return {...state, products: action.payload}
        case GET_COUNTRIES:
            return {...state, countries: action.payload}
        case CHANGE_CATEGORY:
            return {...state, category: action.payload}
        default:
            return state
    }
}

const getBooks = books => ({type: GET_BOOKS, payload: books})
const getGuitars = guitars => ({type: GET_GUITARS, payload: guitars})
const getVouchers = vouchers => ({type: GET_VOUCHERS, payload: vouchers})
export const getCountries = (countries) => ({type: GET_COUNTRIES, payload: countries})
export const changeCategory = category => ({type: CHANGE_CATEGORY, payload: category})

export const getAsyncBooks = () => request(productsAPI.getBooks, getBooks)
export const getAsyncGuitars = () => request(productsAPI.getGuitars, getGuitars)
export const getAsyncVouchers = () => request(productsAPI.getVouchers, getVouchers)
export const getAsyncCountries = () => request(productsAPI.getCountries, getCountries)

