import {act} from "@testing-library/react";

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
            let newImages

            if (typeof(action.payload) === 'string') newImages = [{id: 0, image: action.payload}]
            if (Array.isArray(action.payload)) newImages = action.payload.map((image, i) => ({id: i, image: image}))

            return {...state, images: newImages}
        default:
            return state
    }
}

export const setCurrentImageId = (imageId) => ({type: SET_CURRENT_IMAGE_ID, payload: imageId})
export const setImages = (images) => ({type: SET_IMAGES, payload: images})
