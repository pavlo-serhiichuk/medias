import {filterRequest, filtersAPI, productsAPI as filterAPI, productsAPI, request} from "../api/api";
import {getCountries, getFilteredProducts, setFilteredProducts} from "./productsReducer";
import {hideLoading, showLoading} from "./authReducer";
import {useSelector} from "react-redux";

const OPEN_FILTERS = 'OPEN_FILTERS'
const CLOSE_FILTERS = 'CLOSE_FILTERS'

const SET_PRICE = 'SET_PRICE'
const SET_POPULARITY = 'SET_POPULARITY'
const SET_TIME = 'SET_TIME'
const DELETE_FILTERS = 'DELETE_FILTERS'
const SET_FILTER_NAME = 'SET_FILTER_NAME'
const SET_FILTER_PARAM = 'SET_FILTER_PARAM'

const initialState = {
    isFiltersOpen: false,
    filterName: '',
    filterParam: '',
    price: "....",
    time: "....",
    popularity: "....",
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FILTERS:
            return {...state, isFiltersOpen: true}
        case CLOSE_FILTERS:
            return {...state, isFiltersOpen: false}

        case SET_PRICE:
            return {...state, price: action.payload, popularity: "....", time: "...."}
        case SET_POPULARITY:
            return {...state, popularity: action.payload, price: "....", time: "...."}
        case SET_TIME:
            return {...state, time: action.payload, price: "....", popularity: "...."}
        case SET_FILTER_NAME:
            return {...state, filterName: action.payload}
        case SET_FILTER_PARAM:
            return {...state, filterParam: action.payload}
        case DELETE_FILTERS:
            return {...state, price: "....", popularity: "....", time: "....", filterName: '', filterParam: ''}
        default:
            return state
    }
}

export const openFilters = () => ({type: OPEN_FILTERS})
export const closeFilters = () => ({type: CLOSE_FILTERS})

export const setFilterPrice = (price) => ({type: SET_PRICE, payload: price})
export const deleteFilters = () => ({type: DELETE_FILTERS})
export const setFilterPopularity = (popularity) => ({type: SET_POPULARITY, payload: popularity})
export const setFilterTime = (time) => ({type: SET_TIME, payload: time})
export const setFilterName = (filterName) => ({type: SET_FILTER_NAME, payload: filterName})
export const setFilterParam = (filterParam) => ({type: SET_FILTER_PARAM, payload: filterParam})

export const getAsyncFilteredProducts = (category, data) => {
    if(category === 'books') return filterRequest(productsAPI.getFilteredBooks, data)
    if(category === 'guitars') return filterRequest(productsAPI.getFilteredGuitars, data)
    if (category === 'vouchers') return filterRequest(productsAPI.getFilteredVouchers, data)
}
