import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import Button from "../../common/Buttons/Button.component";
import {connect} from "react-redux";
import {sighOut} from "../../redux/authReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {BsCart4 as CartIcon} from "react-icons/bs";
import {BiHeart as LikedIcon, VscSignOut} from "react-icons/all";
import {SmallProfilePhoto} from "../../common/Imgs/Imgs";
import {closeSidebar} from "../../redux/sidebarReducer";

const Header = (props) => {
    const cartLength = props.cartProducts.length
    const wishesLength = props.wishes.length

    const photoURL = 'https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/117732137_331177674726150_6549843426398612487_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MrItjldoQzEAX963uw-&tn=HtaZntDbEw0xOelm&_nc_ht=scontent-iev1-1.xx&oh=00_AT-sIyTwMePHg3mpQpiDcdB_fc7uyGKnDY0oxDeVRiXskA&oe=61F36766'

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
                                <span className={s.amount}>{wishesLength > 0 && wishesLength}</span>
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
                        <Button onClick={props.openLoginModal}>Log in</Button>
                        <Button onClick={props.openSignInModal}>Sign in</Button>
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
    isSighInModalOpen: state.auth.isSighInModalOpen,
    cartProducts: state.cart.cartProducts,
    wishes: state.wishes.wishes
})

export default connect(mstp, {openLoginModal, openSignInModal, sighOut})(Header);
