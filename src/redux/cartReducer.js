const ADD_TO_CART = 'CART/ADD_TO_CART'
const DELETE_FROM_CART = 'CART/DELETE_FROM_CART'
const BOUGHT = 'CART/BOUGHT'
const INCREMENT_PRODUCT_AMOUNT = 'CART/INCREMENT_PRODUCT_AMOUNT'
const DECREMENT_PRODUCT_AMOUNT = 'CART/DECREMENT_PRODUCT_AMOUNT'

const initialState = {
    cartProducts: [],
    productID: null,
    isBought: false,
}

export const cartReducer = (state = initialState, action) => {
    let existProduct = {}

    if(!!action.payload) {
        existProduct = state.cartProducts.find(item => item.id === action.payload.id && item.title === action.payload.title)
    }
    
    switch (action.type) {
        case ADD_TO_CART:

            if (!!existProduct) {
                existProduct.amount++;
                return {...state}
            }

            let newCartProduct = {...action.payload, amount: 1}
            return {...state, cartProducts: state.cartProducts.concat(newCartProduct)}

        case DELETE_FROM_CART:
            const productID = action.payload
            return {...state, cartProducts: state.cartProducts.filter(elem => elem.id !== productID)}

        case INCREMENT_PRODUCT_AMOUNT:
            existProduct.amount++
            return {...state, cartProducts: [...state.cartProducts]}

        case DECREMENT_PRODUCT_AMOUNT:

            if (existProduct.amount === 1) return {...state}

            existProduct.amount--
            return {...state, cartProducts: [...state.cartProducts]}

        case BOUGHT:
            return {...state, isBought: true}
        default:
            return state
    }
}

export const addToCart = (product) => ({type: ADD_TO_CART, payload: product})
export const deleteFromCart = (productID) => ({type: DELETE_FROM_CART, payload: productID})

export const incrementAmount = (productID, title) => ({type: INCREMENT_PRODUCT_AMOUNT, payload: {id: productID, title}})
export const decrementAmount = (productID, title) => ({type: DECREMENT_PRODUCT_AMOUNT, payload: {id: productID, title}})

export const bought = () => ({type: BOUGHT})

// export const sendOrder = (books) => {
//     const response = productsAPI.sendOrder(books)
// }