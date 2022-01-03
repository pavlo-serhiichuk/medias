import React from 'react';
import s from './Header.module.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {BsCart4 as CartIcon} from "react-icons/bs";
import {BiHeart as LikedIcon} from "react-icons/all";
import API from "../../api/routerApi";
import {sighOut} from "../../redux/authReducer";
import {closeSidebar} from "../../redux/sidebarReducer";
import {SmallProfilePhoto} from "../common/Imgs/Imgs";
import {getAsyncWishesProducts} from "../../redux/wishesReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {PrimaryButton, GoldButton} from "../common/Buttons/Button.component";

const Header = (props) => {
    const cartLength = props.cartProducts.length
    const wishesLength = props.wishesMaping.length
    const photoURL = 'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/117732137_331177674726150_6549843426398612487_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=2eKBsIvVzZ0AX9lCOP3&tn=HtaZntDbEw0xOelm&_nc_ht=scontent-iev1-1.xx&oh=00_AT8bhTD29Dovyx_Jrgwoj-AQszuiGVCH7gw-pijvKgySDw&oe=61F75BE6'

    return (
        <div className={s.header}>
            <div className={s.headerElements}>
                <div className={s.left}>
                    <h1 className={s.article} >
                        <Link to={API.articles.path} onClick={closeSidebar}>medias</Link>
                    </h1>
                    {props.username
                        ?
                        <>
                            <div className={s.profile}>
                                 <SmallProfilePhoto profilePhoto={props.profilePhoto || photoURL}/>
                                <Link to={`${API.profile.path}?=${props.id}`}>{props.username}</Link>
                            </div>
                            <Link onClick={closeSidebar} to={API.wishes.path} className={s.wishes}>
                                <LikedIcon size={25}/>
                                <span onClick={() => getAsyncWishesProducts(props.userId)} className={s.amount}>{wishesLength > 0 && wishesLength}</span>
                            </Link>
                            <Link to={API.cart.path} className={s.cart}>
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
