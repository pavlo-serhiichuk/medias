const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

const initialState = {
    cartBooks: [],
    elementID: null,

}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, cartBooks: state.cartBooks.concat(action.payload)}

        case DELETE_FROM_CART:
            const elementID = action.payload
            return {...state, cartBooks: state.cartBooks.filter(elem => elem.id !== elementID)}
        default:
            return state
    }
}

export const addToCart = (element) => ({type: ADD_TO_CART, payload: element})
export const deleteFromCart = (elementID) => ({type: DELETE_FROM_CART, payload: elementID})


