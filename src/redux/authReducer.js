import {closeLoginModal, closeSignInModal} from "./modalReducer";
import {authAPI} from "../api/api";

const LOG_IN = 'LOG_IN'

const SIGN_IN = 'SIGN_IN'
const SIGH_OUT = 'SIGH_OUT'
const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'

const initialState = {
    isAuth: true,
    isLoading: false,
    username: 'pasha_s',
    userId: 3,
    profilePhoto: null,
    password: '',
    email: '',
    tel: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SIGN_IN:
            return {
                ...state,
                isAuth: true,
                username: action.payload.username,
                password: action.payload.password,
                tel: action.payload.tel,
                email: action.payload.email
            }
        case LOG_IN:
            return {
                ...state,
                isAuth: true,
                username: action.payload.username,
                profilePhoto: action.payload.image,
                email: action.payload.email
            }
        case SIGH_OUT:
            return {
                ...state,
                isAuth: false,
                username: null,
                email: null
            }
        case SHOW_LOADING:
            return {...state, isLoading: true}
        case HIDE_LOADING:
            return {...state, isLoading: false}

        default:
            return state
    }
}

export const signIn = (data) => ({type: SIGN_IN, payload: data})
export const sighOut = () => ({type: SIGH_OUT})
export const showLoading = () => ({type: SHOW_LOADING})
export const hideLoading = () => ({type: HIDE_LOADING})

export const login = (data) => ({type: LOG_IN, payload: data})

export const fetchLogin = (data) => async (dispatch) => {
    const response = await authAPI.login(data)
    dispatch(login(response))
    dispatch(closeLoginModal())
}

export const fetchSignIn = (data) => async (dispatch) => {
    const response = await authAPI.signIn(data)
    dispatch(signIn(response))
    dispatch(closeSignInModal())
}