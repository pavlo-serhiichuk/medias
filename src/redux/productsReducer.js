import {productsAPI, request} from "../api/api";
import {hideLoading, showLoading} from "./authReducer";

const SET_BOOKS = 'SET_BOOKS'
const SET_GUITARS = 'SET_GUITARS'
const SET_VOUCHERS = 'SET_VOUCHERS'
const SET_COUNTRY_FILTERED_VOUCHERS = 'SET_COUNTRY_FILTERED_VOUCHERS'
const SET_COUNTRIES = 'SET_COUNTRIES'
const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS'
const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT'
const CHANGE_COUNTRY_ID = 'CHANGE_COUNTRY_ID'
const CHANGE_CATEGORY = 'CHANGE_CATEGORY'

const initialState = {
    category: '',
    products: [],
    currentProduct: null,
    filteredProducts: [],
    countries: [],
    countryID: null,
    elementID: null,
    isBought: false,
}

export const productsReducer = (state = initialState, action) => {
    const products = {...state, products: action.payload}

    switch (action.type) {
        case SET_BOOKS:
        case SET_GUITARS:
        case SET_VOUCHERS:
        case SET_COUNTRY_FILTERED_VOUCHERS:
        case SET_FILTERED_PRODUCTS:
            return products
        case SET_CURRENT_PRODUCT:
                return {...state, currentProduct: action.payload}
        case SET_COUNTRIES:
            return {...state, countries: action.payload}
        case CHANGE_COUNTRY_ID:
            return {...state, countryID: action.payload}
        case CHANGE_CATEGORY:
            return {...state, category: action.payload}
        default:
            return state
    }
}

const setBooks = books => ({type: SET_BOOKS, payload: books})
const setGuitars = guitars => ({type: SET_GUITARS, payload: guitars})
const setVouchers = vouchers => ({type: SET_VOUCHERS, payload: vouchers})
const setCountryFilteredVouchers = vouchers => ({type: SET_COUNTRY_FILTERED_VOUCHERS, payload: vouchers})
export const setFilteredProducts = filteredProducts => ({type: SET_FILTERED_PRODUCTS, payload: filteredProducts})
export const setCurrentProduct = product => ({type: SET_CURRENT_PRODUCT, payload: product})

const setCountries = (countries) => ({type: SET_COUNTRIES, payload: countries})
export const changeCountryID = countryID => ({type: CHANGE_COUNTRY_ID, payload: countryID})
export const changeCategory = category => ({type: CHANGE_CATEGORY, payload: category})

export const getAsyncBooks = () => request(productsAPI.getBooks, setBooks)
export const getAsyncGuitars = () => request(productsAPI.getGuitars, setGuitars)
export const getAsyncVouchers = () => request(productsAPI.getVouchers, setVouchers)
export const getAsyncCountries = () => request(productsAPI.getCountries, setCountries)

export const getAsyncFilteredVouchers = countryID => request(() => productsAPI.getCountryFilteredVouchers(countryID), setCountryFilteredVouchers)

