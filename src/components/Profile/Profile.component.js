import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Avatar, Content, History, UserInfo, Wrapper} from "./Profile.style";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebar} from "../../redux/sidebarReducer";
import {VscSignOut} from "react-icons/all";
import Button, {RedButton} from "../common/Buttons/Button.component";
import {sighOut} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {changeCategory} from "../../redux/productsReducer";

const Profile = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const makeSighOut = () => {
        dispatch(sighOut())
        dispatch(changeCategory('books'))
        history.push('/books')
    }

    useEffect(() => {
        document.title = 'MyProfile| Medias'
        dispatch(closeSidebar())
    }, [])

    if(!isAuth) return <Redirect to={'/guitars'}/>

    return (
        <Wrapper>
            <Content>
                <Avatar />
                    <UserInfo></UserInfo>
                    <History></History>
                    <RedButton signOut color={'indianred'} onClick={makeSighOut}><VscSignOut/></RedButton>
            </Content>
        </Wrapper>
    );
};

export default Profile;