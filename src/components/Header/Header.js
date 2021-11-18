import React, {useEffect} from 'react';
import s from './Header.module.css';
import {Link} from "react-router-dom";
import Button from "../../common/Buttons/Button.component";
import {connect, useDispatch, useSelector} from "react-redux";
import {sighOut} from "../../redux/authReducer";
import {openLoginModal, openSignInModal} from "../../redux/modalReducer";
import {ImBooks} from "react-icons/im";
import {BsCart4} from "react-icons/bs";
import {GrArticle} from "react-icons/gr";
import {GiGuitar} from "react-icons/gi";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.headerElements}>
                <div className={s.left}>
                    <Link to="/articles"><GrArticle/></Link>
                    <Link to="/guitars"><GiGuitar/></Link>
                    <Link to="/"><ImBooks /></Link>
                    <Link to="/cart"><BsCart4/></Link>
                </div>
                {props.isAuth
                    ? <div className={s.right}>
                        <Button color={'indianred'} onClick={props.sighOut}>Sign out</Button>
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
