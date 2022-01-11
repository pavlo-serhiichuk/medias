import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Avatar, Content, History, UserInfo, Wrapper} from "./Profile.style";
import {connect, useDispatch, useSelector} from "react-redux";
import {hideSidebar} from "../../redux/sidebarReducer";
import {VscSignOut as ExitIcon} from "react-icons/vsc";
import Button, {RedButton} from "../common/Buttons/Button.component";
import {sighOut} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {changeCategory} from "../../redux/productsReducer";

const Profile = (props) => {
    let history = useHistory();

    const makeSighOut = () => {
        props.sighOut()
        props.changeCategory('books')
        history.push('/books')
    }

    useEffect(() => {
        document.title = 'MyProfile| Medias'
        props.hideSidebar()
    }, [])

    if(!props.isAuth) return <Redirect to={'/guitars'}/>

    return (
        <Wrapper>
            <Content>
                <Avatar />
                    <UserInfo></UserInfo>
                    <History></History>
                    <RedButton signOut color={'indianred'} onClick={makeSighOut}><ExitIcon/> Exit</RedButton>
            </Content>
        </Wrapper>
    );
};

const mstp = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mstp, {
    sighOut, changeCategory, hideSidebar
})(Profile);