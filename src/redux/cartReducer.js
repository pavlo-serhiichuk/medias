const ADD_TO_CART = 'CART/ADD_TO_CART'
const DELETE_FROM_CART = 'CART/DELETE_FROM_CART'
const BOUGHT = 'CART/BOUGHT'
const INCREMENT_PRODUCT_AMOUNT = 'CART/INCREMENT_PRODUCT_AMOUNT'
const DECREMENT_PRODUCT_AMOUNT = 'CART/DECREMENT_PRODUCT_AMOUNT'

const initialState = {
    cartProducts: [],
    elementID: null,
    isBought: false,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let existCartProduct = state.cartProducts.find(item => item.id === action.payload.id)

            if (!!existCartProduct) {
                existCartProduct.amount++;
                return {...state}
            }

            let newCartProduct = {...action.payload, amount: 1}
            return {...state, cartProducts: state.cartProducts.concat(newCartProduct)}

        case DELETE_FROM_CART:
            const elementID = action.payload
            return {...state, cartProducts: state.cartProducts.filter(elem => elem.id !== elementID)}

        case INCREMENT_PRODUCT_AMOUNT:
            const incrementBook = state.cartProducts.find(item => item.id === action.payload)
            incrementBook.amount++
            return {...state, cartProducts: [...state.cartProducts]}

        case DECREMENT_PRODUCT_AMOUNT:
            const decrementProduct = state.cartProducts.find(item => item.id === action.payload)

            if (decrementProduct.amount === 1) return {...state}

            decrementProduct.amount--
            return {...state, cartProducts: [...state.cartProducts]}

        case BOUGHT:
            return {...state, isBought: true}
        default:
            return state
    }
}

export const addToCart = (product) => ({type: ADD_TO_CART, payload: product})
export const deleteFromCart = (productID) => ({type: DELETE_FROM_CART, payload: productID})

export const incrementAmount = (productID) => ({type: INCREMENT_PRODUCT_AMOUNT, payload: productID})
export const decrementAmount = (productID) => ({type: DECREMENT_PRODUCT_AMOUNT, payload: productID})

export const bought = () => ({type: BOUGHT})

// export const sendOrder = (books) => {
//     const response = productsAPI.sendOrder(books)
// }