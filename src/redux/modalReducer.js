const OPEN_LOG_IN_MODAL = 'OPEN_LOG_IN_MODAL'
const CLOSE_LOG_IN_MODAL = 'CLOSE_LOG_IN_MODAL'

const OPEN_SIGN_IN_MODAL = 'OPEN_SIGN_IN_MODAL'
const CLOSE_SIGN_IN_MODAL = 'CLOSE_SIGN_IN_MODAL'

const OPEN_MORE_INFO_MODAL = 'OPEN_MORE_INFO_MODAL'
const CLOSE_MORE_INFO_MODAL = 'CLOSE_MORE_INFO_MODAL'

const OPEN_PHOTOS_POPUP = 'OPEN_PHOTOS_POPUP'
const CLOSE_PHOTOS_POPUP = 'CLOSE_PHOTOS_POPUP'

const initialState = {
    isSighInModalOpen: false,
    isLoginModalOpen: false,
    isMoreInfoModalOpen: false,
    currentProductId: null,
    isPhotosPopupOpen: true
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {

        case OPEN_LOG_IN_MODAL:
            return {...state, isLoginModalOpen: true}

        case CLOSE_LOG_IN_MODAL:
            return {...state, isLoginModalOpen: false}

        case OPEN_SIGN_IN_MODAL:
            return {...state, isSighInModalOpen: true}

        case CLOSE_SIGN_IN_MODAL:
            return {...state, isSighInModalOpen: false}

        case OPEN_MORE_INFO_MODAL:
            return {...state, isMoreInfoModalOpen: true, currentProductId: action.payload}

        case CLOSE_MORE_INFO_MODAL:
            return {...state, isMoreInfoModalOpen: false}

        case OPEN_PHOTOS_POPUP:
            return {...state, isPhotosPopupOpen: true}

        case CLOSE_PHOTOS_POPUP:
            return {...state, isPhotosPopupOpen: false}
        default:
            return state
    }
}


export const openLoginModal = () => ({type: OPEN_LOG_IN_MODAL})
export const closeLoginModal = () => ({type: CLOSE_LOG_IN_MODAL})

export const openSignInModal = () => ({type: OPEN_SIGN_IN_MODAL})
export const closeSignInModal = () => ({type: CLOSE_SIGN_IN_MODAL})

export const openMoreInfoModal = (id) => ({type: OPEN_MORE_INFO_MODAL, payload: id})
export const closeMoreInfoModal = () => ({type: CLOSE_MORE_INFO_MODAL})

export const openPhotosPopup = () => ({type: OPEN_PHOTOS_POPUP})
export const closePhotosPopup = () => ({type: CLOSE_PHOTOS_POPUP})
