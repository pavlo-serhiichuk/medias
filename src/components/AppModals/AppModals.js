import React from 'react';
import MoreInfoContainer from "../MoreInfo/MoreInfoContainer";
import PhotosPopup from "../PhotosPopup/PhotosPopup.component";
import LoginPopup from "../LoginPopup/LoginPopup.component";
import SignInContainer from "../SignIn/SignInContainer";
import {useSelector} from "react-redux";

const AppModals = () => {

    const {
        isMoreInfoModalOpen,
        isPhotosPopupOpen,
        isLoginModalOpen,
        isSignInModalOpen
    } = useSelector(state => state.modal)

    return (
        <>
            {isMoreInfoModalOpen && <MoreInfoContainer/>}
            {isPhotosPopupOpen && <PhotosPopup/>}
            {isLoginModalOpen && <LoginPopup/>}
            {isSignInModalOpen && <SignInContainer/>}
        </>
    );
};

export default AppModals;