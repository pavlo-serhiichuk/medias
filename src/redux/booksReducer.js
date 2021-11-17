const GET_ELEMENTS = 'GET_ELEMENTS'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

const initialState = {
    books: [],
    cartBooks: [],
    elementID: null,
}

export const booksReducer = (state = initialState, action) => {


    switch (action.type) {
        case GET_ELEMENTS:
            return {...state, books: action.payload}
        case ADD_TO_CART:
            let existCartBook =  state.cartBooks.find(item => item.id === action.payload.id)

            if(!!existCartBook) {
                existCartBook.amount++;
                return {...state}
            }
            let newCartBook = {...action.payload, amount: 1}
            return {...state, cartBooks: state.cartBooks.concat(newCartBook)}

        case DELETE_FROM_CART:
            const elementID = action.payload
            return {...state, cartBooks: state.cartBooks.filter(elem => elem.id !== elementID)}
        default:
            return state
    }
}

const getElements = users => ({type: GET_ELEMENTS, payload: users})
export const addToCart = (element) => ({type: ADD_TO_CART, payload: element})
export const deleteFromCart = (elementID) => ({type: DELETE_FROM_CART, payload: elementID})

export const getAsyncBooks = () => {
    return async function (dispatch) {
        const response = await fetch('http://localhost:3001/book', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const jsonUsers = await response.json()
        dispatch(getElements(jsonUsers))
    }
}