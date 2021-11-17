import {articlesAPI, booksAPI} from "../api/api";

const GET_ELEMENTS = 'GET_ELEMENTS'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const BOUGHT = 'BOUGHT'
const INCREMENT_BOOK_AMOUNT = 'INCREMENT_BOOK_AMOUNT'
const DECREMENT_BOOK_AMOUNT = 'DECREMENT_BOOK_AMOUNT'

const initialState = {
    books: [],
    cartBooks: [],
    elementID: null,
    isBought: false,
}

export const booksReducer = (state = initialState, action) => {


    switch (action.type) {
        case GET_ELEMENTS:
            return {...state, books: action.payload}
        case ADD_TO_CART:
            let existCartBook = state.cartBooks.find(item => item.id === action.payload.id)

            if (!!existCartBook) {
                existCartBook.amount++;
                return {...state}
            }
            let newCartBook = {...action.payload, amount: 1}
            return {...state, cartBooks: state.cartBooks.concat(newCartBook)}

        case DELETE_FROM_CART:
            const elementID = action.payload
            return {...state, cartBooks: state.cartBooks.filter(elem => elem.id !== elementID)}

        case BOUGHT:
            return {...state, isBought: true}
        case INCREMENT_BOOK_AMOUNT:
            const incrementBook = state.cartBooks.find(item => item.id === action.payload)
            incrementBook.amount++
            return {...state, cartBooks: [...state.cartBooks]}
        case DECREMENT_BOOK_AMOUNT:
            const decrementBook = state.cartBooks.find(item => item.id === action.payload)

            if (decrementBook.amount === 1) return {...state}

            decrementBook.amount--
            return {...state, cartBooks: [...state.cartBooks]}
        default:
            return state
    }
}

const getElements = users => ({type: GET_ELEMENTS, payload: users})
export const addToCart = (book) => ({type: ADD_TO_CART, payload: book})
export const deleteFromCart = (bookID) => ({type: DELETE_FROM_CART, payload: bookID})
export const incrementAmount = (bookID) => ({type: INCREMENT_BOOK_AMOUNT, payload: bookID})
export const decrementAmount = (bookID) => ({type: DECREMENT_BOOK_AMOUNT, payload: bookID})
export const bought = () => ({type: BOUGHT})

export const getAsyncBooks = () => async (dispatch) => {
    const response = await booksAPI.getBooks()
    dispatch(getElements(response))
}

// export const sendOrder = (books) => {
//     const response = booksAPI.sendOrder(books)
// }