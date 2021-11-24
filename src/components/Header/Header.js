import React from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import Button from "../../common/Buttons/Button.component";
import {connect, useSelector} from "react-redux";
import {sighOut} from "../../redux/authReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {BsCart4} from "react-icons/bs";
import {VscSignOut} from "react-icons/all";
import {SmallProfilePhoto} from "../../common/Imgs/Imgs";


const Header = (props) => {
    const username = useSelector(state => state.auth.username)
    const profilePhoto = useSelector(state => state.auth.profilePhoto)
    return (
        <div className={s.header}>
            <div className={s.headerElements}>
                <div className={s.left}>
                    <h1>
                        <Link className={s.article} to="/articles">medias</Link>
                    </h1>
                    {username
                        ?
                        <>
                            <div className={s.profile}>
                                <SmallProfilePhoto profilePhoto={profilePhoto}/>
                                <Link to={`/profile?=${props.id}`}>{username}</Link>
                            </div>
                            <Link className={s.cart} to="/cart"><BsCart4/></Link>
                        </>
                        : null}
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
