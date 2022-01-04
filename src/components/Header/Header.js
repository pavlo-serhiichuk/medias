import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import Button, {PrimaryButton, GoldButton} from "../common/Buttons/Button.component";
import {connect} from "react-redux";
import {sighOut} from "../../redux/authReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {BsCart4 as CartIcon} from "react-icons/bs";
import {BiHeart as LikedIcon} from "react-icons/all";
import {SmallProfilePhoto} from "../common/Imgs/Imgs";
import {closeSidebar} from "../../redux/sidebarReducer";
import {getAsyncWishesProducts} from "../../redux/wishesReducer";

const Header = (props) => {
    const cartLength = props.cartProducts.length
    const wishesLength = props.wishesMaping.length

    const photoURL = 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
    return (
        <div className={s.header}>
            <div className={s.headerElements}>
                <div className={s.left}>
                    <h1 className={s.article} >
                        <Link to="/articles" onClick={closeSidebar}>medias</Link>
                    </h1>
                    {props.username
                        ?
                        <>
                            <div className={s.profile}>
                                 <SmallProfilePhoto profilePhoto={props.profilePhoto || photoURL}/>
                                <Link to={`/profile?=${props.id}`}>{props.username}</Link>
                            </div>
                            <Link onClick={closeSidebar} to="/wishes" className={s.wishes}>
                                <LikedIcon size={25}/>
                                <span onClick={() => getAsyncWishesProducts(props.userId)} className={s.amount}>{wishesLength > 0 && wishesLength}</span>
                            </Link>
                            <Link to="/cart" className={s.cart}>
                                <CartIcon size={25}/>
                                <span className={s.amount}>{cartLength > 0 && cartLength}</span>
                            </Link>
                        </>
                        : null}
                </div>
                {props.isAuth
                    ? ''
                    : <div className={s.right}>
                        <GoldButton onClick={props.openLoginModal}>Log in</GoldButton>
                        <PrimaryButton onClick={props.openSignInModal}>Sign in</PrimaryButton>
                    </div>
                }
            </div>
        </div>
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
    sighOut,
    getAsyncWishesProducts})(Header);
