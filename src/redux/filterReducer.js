const IS_FILTERS_OPEN = 'IS_FILTER_OPEN'

const initialState = {
    isFiltersOpen: false,
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FILTERS_OPEN:
            return {...state, isFiltersOpen: action.payload}
        default:
            return state
    }
}


export const openFilters = () => ({type: IS_FILTERS_OPEN, payload: true})
export const closeFilters = () => ({type: IS_FILTERS_OPEN, payload: false})

