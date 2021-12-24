const SET_CURRENT_IMAGE_ID = 'SET_CURRENT_IMAGE_ID'
const SET_IMAGES = 'SET_IMAGES'

const initialState = {
    currentImgId: null,
    images: [],
}

export const imagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CURRENT_IMAGE_ID:
            return {...state, currentImgId: action.payload}
        case SET_IMAGES:
            return {...state, images: action.payload}
        default:
            return state
    }
}

export const setCurrentImageId = (image) => ({type: SET_CURRENT_IMAGE_ID, payload: image})
export const setImages = (image) => ({type: SET_IMAGES, payload: image})
