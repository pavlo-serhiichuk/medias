import {Axios as axios} from "axios";
import {closeLoginModal, closeSignInModal} from "./modalReducer";

const LOG_IN = 'LOG_IN'

const SIGN_IN = 'SIGN_IN'
const SIGH_OUT = 'SIGH_OUT'

const initialState = {
    isAuth: null,
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
                password: action.payload.password,
                tel: action.payload.tel,
                email: action.payload.email
            }
        case SIGH_OUT:
            return {
                ...state,
                isAuth: false,
                userame: null,
                email: null
            }

        default:
            return state
    }
}

export const signIn = (data) => ({type: SIGN_IN, payload: data})
export const sighOut = () => ({type: SIGH_OUT})

export const login = (data) => ({type: LOG_IN, payload: data})

export const fetchLogin = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data),
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(login(json))
                dispatch(closeLoginModal())
            })
    }
}

export const fetchSignIn = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3001/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(data),
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                dispatch(signIn(json))
                dispatch(closeSignInModal())
                return json
            })
    }
}