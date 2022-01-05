import React from 'react';
import s from './Header.module.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {BsCart4 as CartIcon} from "react-icons/bs";
import {BiHeart as LikedIcon} from "react-icons/all";
import API from "../../api/routerApi";
import {sighOut} from "../../redux/authReducer";
import {closeFilters, closeSidebar} from "../../redux/sidebarReducer";
import {getAsyncWishesProducts} from "../../redux/wishesReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {SmallProfilePhoto} from "../common/Imgs/Imgs";
import {PrimaryButton, GoldButton} from "../common/Buttons/Button.component";
import Header from "./Header.component";
import {wishesAPI} from "../../api/api";

const HeaderContainer = (props) => {
    const cart = props.cartProducts.length
    const wishes = props.wishesProducts.length
    const photoURL = 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
    const getAsyncWishes = () => getAsyncWishesProducts(props.userId)

    const close = () => {
        props.closeSidebar()
        props.closeFilters()
    }

    return (
        <>
            <Header
                {...props}
                cart={cart}
                wishes={wishes}
                photoURL={photoURL}
                getAsyncWishes={getAsyncWishes}
                openLoginModal={props.openLoginModal}
                openSignInModal={props.openSignInModal}
                close={close}/>
        </>
    );
};

const mstp = state => ({
    isAuth: state.auth.isAuth,
    profilePhoto: state.auth.profilePhoto,
    username: state.auth.username,
    userId: state.auth.userId,
    isSighInModalOpen: state.auth.isSighInModalOpen,
    cartProducts: state.cart.cartProducts,
    wishesProducts: state.wishes.wishesProducts,
    wishesMaping: state.wishes.wishesMaping
})

export default connect(mstp, {
    openLoginModal,
    openSignInModal,
    getAsyncWishesProducts,
    closeFilters,
    closeSidebar})(HeaderContainer);
