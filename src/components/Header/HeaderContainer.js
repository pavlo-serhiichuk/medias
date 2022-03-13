import React from 'react';
import {connect} from "react-redux";
import {hideFilters, hideSidebar} from "../../redux/sidebarReducer";
import {getAsyncWishesProducts} from "../../redux/wishesReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import Header from "./Header.component";
import {setLanguage} from "../../redux/langReducer";

const HeaderContainer = (props) => {
    const cart = props.cartProducts.length
    const wishes = props.wishesProducts.length
    const avatar = 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
    const uaFlag = "https://mltwhqhpb0wf.i.optimole.com/JdK432s-E1CyyNUi/w:auto/h:auto/q:auto/https://spring-perevod.com/wp-content/uploads/2015/06/UA-Flag.png"
    const gbFlag = "https://i.pinimg.com/736x/17/0d/98/170d98e54ff7d32e417f12a087ed6c22.jpg"

    const getAsyncWishes = () => getAsyncWishesProducts(props.userId)

    const close = () => {
        props.hideSidebar()
        props.hideFilters()
    }

    return (
        <>
            <Header
                {...props}
                cart={cart}
                wishes={wishes}
                getAsyncWishes={getAsyncWishes}
                uaFlag={uaFlag}
                gbFlag={gbFlag}
                avatar={avatar}
                openLoginModal={props.openLoginModal}
                openSignInModal={props.openSignInModal}
                close={close}/>
        </>
    );
};

const mstp = state => ({
    isAuth: state.auth.isAuth,
    authError: state.auth.authError,
    profilePhoto: state.auth.profilePhoto,
    username: state.auth.username,
    userId: state.auth.userId,
    isSighInModalOpen: state.auth.isSighInModalOpen,
    cartProducts: state.cart.cartProducts,
    wishesProducts: state.wishes.wishesProducts,
    wishesMaping: state.wishes.wishesMaping,
    lang: state.lang.language
})

export default connect(mstp, {
    openLoginModal,
    openSignInModal,
    getAsyncWishesProducts,
    hideFilters,
    hideSidebar, setLanguage})(HeaderContainer);
