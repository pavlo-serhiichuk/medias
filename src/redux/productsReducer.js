import {productsAPI, request} from "../api/api";
import {hideLoading, showLoading} from "./authReducer";

const GET_BOOKS = 'GET_BOOKS'
const GET_GUITARS = 'GET_GUITARS'
const GET_VOUCHERS = 'GET_VOUCHERS'
const GET_FILTERED_VOUCHERS = 'GET_FILTERED_VOUCHERS'
const CHANGE_COUNTRY_ID = 'CHANGE_COUNTRY_ID'
const GET_COUNTRIES = 'GET_COUNTRIES'
const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

const initialState = {
    category: '',
    products: [],
    filteredProducts: [],
    countries: [],
    countryID: null,
    elementID: null,
    isBought: false,
}

export const productsReducer = (state = initialState, action) => {
    const products = {...state, products: action.payload}

    switch (action.type) {
        case GET_BOOKS:
            return products
        case GET_GUITARS:
            return products
        case GET_VOUCHERS:
            return products
        case GET_FILTERED_VOUCHERS:
            return products
        case GET_COUNTRIES:
            return {...state, countries: action.payload}
        case CHANGE_COUNTRY_ID:
            console.log(CHANGE_COUNTRY_ID)
            return {...state, countryID: action.payload}
        case CHANGE_CATEGORY:
            console.log('Category changed')
            return {...state, category: action.payload}
        default:
            return state
    }
}

const getBooks = books => ({type: GET_BOOKS, payload: books})
const getGuitars = guitars => ({type: GET_GUITARS, payload: guitars})
const getVouchers = vouchers => ({type: GET_VOUCHERS, payload: vouchers})
const getFilteredVouchers = vouchers => ({type: GET_FILTERED_VOUCHERS, payload: vouchers})
export const changeCountryID = countryID => ({type: CHANGE_COUNTRY_ID, payload: countryID})
export const getCountries = (countries) => ({type: GET_COUNTRIES, payload: countries})
export const changeCategory = category => ({type: CHANGE_CATEGORY, payload: category})

export const getAsyncBooks = () => async dispatch => {
    dispatch(showLoading())
    const response = await fetch('http://localhost:3001/book')
    const json = await response.json()
    dispatch(getBooks(json))
    dispatch(hideLoading())
}

// export const getAsyncBooks = request(productsAPI.getBooks, getBooks)

export const getAsyncGuitars = () => request(productsAPI.getGuitars, getGuitars)
export const getAsyncVouchers = () => request(productsAPI.getVouchers, getVouchers)
export const getAsyncCountries = () => request(productsAPI.getCountries, getCountries)

export const getAsyncFilteredVouchers = (countryID) => request(() => productsAPI.getFilteredVouchers(countryID), getFilteredVouchers)

