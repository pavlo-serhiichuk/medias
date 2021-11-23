import React from 'react';
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
import {changeCategory} from "../../redux/productsReducer";

const Header = (props) => {
const dispatch = useDispatch()
const category = useSelector(state => state.products.category)

    const toggleCategory = (nextCategory) => {
        category !== nextCategory && dispatch(changeCategory(nextCategory))
    }

    return (
        <div className={s.header}>
            <div className={s.headerElements}>
                <div className={s.left}>
                    <Link to="/articles"><GrArticle/></Link>
                    <Link to="/guitars" onClick={() => toggleCategory('guitars')}><GiGuitar/></Link>
                    <Link to="/" onClick={() => toggleCategory('books')}><ImBooks /></Link>
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
