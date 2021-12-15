const OPEN_FILTERS = 'OPEN_FILTERS'
const CLOSE_FILTERS = 'CLOSE_FILTERS'

const initialState = {
    isFiltersOpen: false,
    price: "default",
    time: "default",
    popularity: "default",
}

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FILTERS:
            console.log(OPEN_FILTERS)
            return {...state, isFiltersOpen: true}

            case CLOSE_FILTERS:
            console.log(CLOSE_FILTERS)
            return {...state, isFiltersOpen: false}
        default:
            return state
    }
}


export const openFilters = () => ({type: OPEN_FILTERS})
export const closeFilters = () => ({type: CLOSE_FILTERS})

