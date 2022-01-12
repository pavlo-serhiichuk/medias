const SET_LANGUAGE = 'SET_LANGUAGE'

const initialState = {
    language: 'ua',
}

export const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {...state, language: action.payload}
        default:
            return state
    }
}

export const setLanguage = (language) => ({type: SET_LANGUAGE, payload: language})
