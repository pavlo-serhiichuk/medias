import {request, wishesAPI} from "../api/api";
import {hideLoading, showLoading} from "./authReducer";
import {openAlert} from "./modalReducer";
import {useSelector} from "react-redux";

const SET_WISHES = 'WISHES/SET_WISHES'
const SET_WISHES_LENGTH = 'WISHES/SET_WISHES_LENGTH'
const DELETE_FROM_WISHES = 'CART/DELETE_FROM_WISHES'
const SET_IS_WISH_ADDED = 'WISHES/SET_IS_WISH_ADDED'

const initialState = {
    wishes: [],
    isWishAdded: false,
}

export const wishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WISHES:
            return {...state, wishes: action.payload}
        case SET_IS_WISH_ADDED:
            return {...state, isWishAdded: action.payload}
        default:
            return state
    }
}

export const setWishes = wishes => ({type: SET_WISHES, payload: wishes})
export const setWishesLenght = wishesLength => ({type: SET_WISHES_LENGTH, payload: wishesLength})
export const setIsWishAdded = status => ({type: SET_IS_WISH_ADDED, payload: status})
// export const getAsyncWishes = () => request(wishesAPI.getWishes, setWishes)

export const setAsyncWish = (userId, category, productId) => async dispatch => {
    // let wishes = useSelector(state => state.wishes.wishes)

    const data = {userId, category, productId}

    const response = await wishesAPI.setWish(data)
        // if(JSON.stringify(wishes) === JSON.stringify(response)) {
        //
        // }
    // debugger
    // dispatch(openAlert())
    dispatch(setIsWishAdded(true))
    dispatch(setWishes(response))
}