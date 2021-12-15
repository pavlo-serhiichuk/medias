const OPEN_FILTERS = 'OPEN_FILTERS'
const CLOSE_FILTERS = 'CLOSE_FILTERS'

const SET_PRICE = 'SET_PRICE'
const SET_POPULARITY = 'SET_POPULARITY'
const SET_TIME = 'SET_TIME'

const initialState = {
    isFiltersOpen: false,
    price: "....",
    time: "....",
    popularity: "....",
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FILTERS:
            console.log(OPEN_FILTERS)
            return {...state, isFiltersOpen: true}
        case CLOSE_FILTERS:
            console.log(CLOSE_FILTERS)
            return {...state, isFiltersOpen: false}

        case SET_PRICE:
            console.log('state changed')
            return {...state, price: action.payload, popularity: "....", time: "...."}
        case SET_POPULARITY:
            return {...state, popularity: action.payload, price: "....", time: "...."}
        case SET_TIME:
            return {...state,  time: action.payload, price: "....", popularity: "...."}

        default:
            return state
    }
}


export const openFilters = () => ({type: OPEN_FILTERS})
export const closeFilters = () => ({type: CLOSE_FILTERS})

export const setFilterPrice = (price) => ({type: SET_PRICE, payload: price})
export const setFilterPopularity = (popularity) => ({type: SET_POPULARITY, payload: popularity})
export const setFilterTime = (time) => ({type: SET_TIME, payload: time})

