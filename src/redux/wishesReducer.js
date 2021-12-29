import {request, wishesAPI} from "../api/api";

const SET_WISHES = 'WISHES/SET_WISHES'
const ADD_TO_WISHES = 'WISHES/ADD_TO_WISHES'
const DELETE_FROM_WISHES = 'CART/DELETE_FROM_WISHES'

const initialState = {
    wishes: [],
}

export const wishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WISHES:
            return {...state, wishes: action.payload}
        case ADD_TO_WISHES:
            return {...state}
        case DELETE_FROM_WISHES:
            return {...state}
        default:
            return state
    }
}

export const setWishes = wishes => ({type: SET_WISHES, payload: wishes})
export const addToWishes = productID => ({type: ADD_TO_WISHES, payload: productID})
export const deleteFromWishes = productID => ({type: DELETE_FROM_WISHES, payload: productID})
export const getAsyncWishes = () => request(wishesAPI.getWishes, setWishes)
export const setAsyncWish = (category, productId) => request(wishesAPI.setWish(category, productId))