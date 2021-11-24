import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import Button from "../../common/Buttons/Button.component";
import {connect} from "react-redux";
import {sighOut} from "../../redux/authReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {BsCart4} from "react-icons/bs";
import {VscSignOut} from "react-icons/all";


const Header = (props) => {

    return (
        <div className={s.header}>
            <div className={s.headerElements}>
                <div className={s.left}>
                    <h1>
                        <Link className={s.article} to="/articles">medias</Link>
                    </h1>
                    <Link className={s.account} to={`/profile?=${props.id}`}>User name</Link>
                    <Link className={s.cart} to="/cart"><BsCart4/></Link>
                </div>
                {props.isAuth
                    ? <div className={s.signOut}>
                        <Button signOut color={'indianred'} onClick={props.sighOut}><VscSignOut/></Button>
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
    isSighInModalOpen: state.auth.isSighInModalOpen
})

export default connect(mstp, {openLoginModal, openSignInModal, sighOut})(Header);
