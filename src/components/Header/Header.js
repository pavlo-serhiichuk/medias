import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import Button from "../../common/Buttons/Button.component";
import {connect, useSelector} from "react-redux";
import {sighOut} from "../../redux/authReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {BsCart4} from "react-icons/bs";
import {BiHeart, VscSignOut} from "react-icons/all";
import {SmallProfilePhoto} from "../../common/Imgs/Imgs";


const Header = (props) => {
    const wishesAmount = props.wishes.length
    const cartAmount = props.cartProducts.length
    console.log('wishesAmount ', wishesAmount)
    console.log('cartAmount ', cartAmount)

    return (
        <div className={s.header}>
            <div className={s.headerElements}>
                <div className={s.left}>
                    <h1>
                        <Link className={s.article} to="/articles">medias</Link>
                    </h1>
                    {props.username
                        ?
                        <>
                            <div className={s.profile}>
                                <SmallProfilePhoto profilePhoto={props.profilePhoto}/>
                                <Link to={`/profile?=${props.id}`}>{props.username}</Link>
                            </div>
                            <Link to="/wishes" className={s.wishes}>
                                <BiHeart/>
                                <span className={s.amount}> {wishesAmount > 0 && wishesAmount}</span>
                            </Link>
                            <Link to="/cart" className={s.cart}>
                                <BsCart4/>
                                <span className={s.amount}> {cartAmount > 0 && cartAmount}</span>
                            </Link>
                        </>
                        : null}
                </div>
                {props.isAuth
                    ? <div className={s.signOut}>
                        <Button signOut color={'indianred'} onClick={() => props.sighOut}><VscSignOut/></Button>
                    </div>

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
