import {wishesAPI} from "../api/api";

const SET_WISHES_MAPING = 'WISHES/SET_WISHES_MAPING'
const SET_WISHES_PRODUCTS = 'WISHES/SET_WISHES_PRODUCTS'
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
        case SET_WISHES_PRODUCTS:
            if (action.payload.length === 0) return {...state}
            return {...state, wishesProducts: action.payload}
        case SET_IS_WISH_ADDED:
            return {...state, isWishAdded: action.payload}
        default:
            return state
    }
}

export const setWishesMaping = wishesMaping => ({type: SET_WISHES_MAPING, payload: wishesMaping})
export const setWishesProducts = wishesProducts => ({type: SET_WISHES_PRODUCTS, payload: wishesProducts})
export const setIsWishAdded = status => ({type: SET_IS_WISH_ADDED, payload: status})


export const getAsyncWishesProducts = (userId) => async dispatch => {
    const response = await wishesAPI.getWishes({userId})

    dispatch(setWishesProducts(response))
}

export const setAsyncWish = (userId, category, productId) => async dispatch => {
    const response = await wishesAPI.setWish({userId, category, productId})

    dispatch(setIsWishAdded(true))
    dispatch(setWishesMaping(response))
}