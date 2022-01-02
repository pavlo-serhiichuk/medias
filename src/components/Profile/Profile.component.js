import React, {useEffect} from 'react';
import {Redirect} from "react-router-dom";
import {VscSignOut} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Content, History, UserInfo, Wrapper} from "./Profile.style";

import {sighOut} from "@Redux/authReducer";
import {closeSidebar} from "@Redux/sidebarReducer";
import Button from "../common/Buttons/Button.component";

const Profile = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const makeSighOut = () => dispatch(sighOut())

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
                    <Button signOut color={'indianred'} onClick={makeSighOut}><VscSignOut/></Button>
            </Content>
        </Wrapper>
    );
};

export default Profile;