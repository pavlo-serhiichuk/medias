import {wishesAPI} from "../api/api";
import {openAlert} from "./modalReducer";

const SET_WISHES_MAPING = 'WISHES/SET_WISHES_MAPING'
const GET_WISHES_PRODUCTS = 'WISHES/GET_WISHES_PRODUCTS'
const DELETE_FROM_WISHES = 'CART/DELETE_FROM_WISHES'
const SET_IS_WISH_ADDED = 'WISHES/SET_IS_WISH_ADDED'

const initialState = {
    wishesMaping: [],
    wishesProducts: [],
    isWishAdded: false,
}

export const wishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WISHES_MAPING:
            return {...state, wishesMaping: action.payload}
        case GET_WISHES_PRODUCTS:
            return {...state, wishesProducts: action.payload}
        case SET_IS_WISH_ADDED:
            return {...state, isWishAdded: action.payload}
        default:
            return state
    }
}

export const setWishesMaping = wishesMaping => ({type: SET_WISHES_MAPING, payload: wishesMaping})
export const getWishesProducts = wishesProducts => ({type: GET_WISHES_PRODUCTS, payload: wishesProducts})
export const setIsWishAdded = status => ({type: SET_IS_WISH_ADDED, payload: status})


export const getAsyncWishesProducts = (userId) => async dispatch => {
    const response = await wishesAPI.getWishes({userId})

    dispatch(getWishesProducts(response))
}

export const setAsyncWish = (userId, category, productId) => async dispatch => {
    const response = await wishesAPI.setWish({userId, category, productId})

    dispatch(setIsWishAdded(true))
    dispatch(setWishesMaping(response))
}