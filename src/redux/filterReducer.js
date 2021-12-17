import {filtersAPI, productsAPI as filterAPI, productsAPI, request} from "../api/api";
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
const DELETE_FILTER_NAME = 'DELETE_FILTER_NAME'
const SET_FILTER_PARAM = 'SET_FILTER_PARAM'
const DELETE_FILTER_PARAM = 'DELETE_FILTER_PARAM'

const initialState = {
    isFiltersOpen: false,
    filterName: '',
    filterParam: '',
    price: "....",
    time: "....",
    popularity: "....",
}
//
// const books = [{}, {}]
// let filteredBooks
//
// filterKeys.forEach(filterKey => {
//     filteredBooks = books.map(book => {
//
//         if (pompurum[filterKey] === 'lower') {
//             return book[filterKey]
//         }
//
//         return book[filterKey]
//
//     })
// })

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


export const getAsyncFilteredProducts = (category, data) => async dispatch => {
    dispatch(showLoading())
    let response =  await productsAPI.getFilteredBooks(data)

    // if(category === 'guitars') response =
    // category === 'guitars' && productsAPI.getFilteredBooks(data)
    // category === 'guitars' && productsAPI.getFilteredGuitars(data)
    // category === 'vouchers' && productsAPI.getFilteredVouchers(data)


    dispatch(setFilteredProducts(response))
    dispatch(deleteFilters())

    dispatch(hideLoading())

}
//
// export const getAsyncFilteredProducts = (category, data) => {
//     category === 'books' && filterRequest(productsAPI.getFilteredBooks, data)
//     category === 'guitars' && filterRequest(productsAPI.getFilteredGuitars, data)
//     category === 'vouchers' && filterRequest(productsAPI.getFilteredVouchers, data)
// }
//
//
// export const filterRequest = (method, data) => async dispatch => {
//     dispatch(showLoading())
//     let response =  await method(data)
//
//     dispatch(setFilteredProducts(response))
//     dispatch(deleteFilters())
//     dispatch(hideLoading())
// }