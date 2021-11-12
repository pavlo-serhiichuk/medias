const GET_ELEMENTS = 'GET_ELEMENTS'

const initialState = {
    books: [],


}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ELEMENTS:
            return {...state, books: action.payload}
        default:
            return state
    }
}

const getElements = users => ({type: GET_ELEMENTS, payload: users})

export const getAsyncElements = () => {
    return async function (dispatch) {
        const response = await fetch('http://localhost:3001/book')
        const jsonUsers = await response.json()
        dispatch(getElements(jsonUsers))

    }
}