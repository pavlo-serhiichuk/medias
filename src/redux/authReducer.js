import {closeLoginModal, closeSignInModal} from "./modalReducer";
import {authAPI} from "../api/api";

const LOG_IN = 'LOG_IN'

const SIGN_IN = 'SIGN_IN'
const SIGH_OUT = 'SIGH_OUT'

const initialState = {
    isAuth: true,
    username: '',
    password: '',
    tel: '',
    email: '',
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
            console.log(LOG_IN)
            return {
                ...state,
                isAuth: true,
                username: action.payload.username,
                email: action.payload.email
            }
            return {
                ...state,
                isAuth: true,
                username: action.payload.username,
                password: action.payload.password,
                tel: action.payload.tel,
                email: action.payload.email
            }
        case SIGH_OUT:
            return {
                ...state,
                isAuth: false,
                username: null,
                email: null
            }

        default:
            return state
    }
}

export const signIn = (data) => ({type: SIGN_IN, payload: data})
export const sighOut = () => ({type: SIGH_OUT})

export const login = (data) => ({type: LOG_IN, payload: data})

export const fetchLogin = (data) => async (dispatch) => {
    const responce = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(data),
    })

    const jsonLogin = await responce.json()

    dispatch(login(jsonLogin))
    dispatch(closeLoginModal())
}


export const fetchSignIn = (data) => async (dispatch) => {
    const response = await authAPI.signIn(data)
    dispatch(signIn(response))
    dispatch(closeSignInModal())
}