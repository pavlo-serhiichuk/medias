import {productsAPI} from "../api/api";

const GET_BOOKS = 'GET_BOOKS'
const GET_GUITARS = 'GET_GUITARS'

const initialState = {
    books: [],
    guitars: [],
    elementID: null,
    isBought: false,
}

export const productsReducer = (state = initialState, action) => {


    switch (action.type) {
        case GET_BOOKS:
            return {...state, books: action.payload}
        case GET_GUITARS:
            return {...state, guitars: action.payload}
        default:
            return state
    }
}

const getBooks = books => ({type: GET_BOOKS, payload: books})
const getGuitars = guitars => ({type: GET_BOOKS, payload: guitars})

export const getAsyncBooks = () => async (dispatch) => {
    const response = await productsAPI.getBooks()
    dispatch(getBooks(response))
}

export const getAsyncGuitars = () => async (dispatch) => {
    const response = await productsAPI.getGuitars()
    dispatch(getGuitars(response))
}

// export const sendOrder = (books) => {
//     const response = productsAPI.sendOrder(books)
// }