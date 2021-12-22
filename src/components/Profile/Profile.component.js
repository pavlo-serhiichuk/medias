import React, {useEffect} from 'react';
import {Avatar, Content, History, UserInfo, Wrapper} from "./Profile.style";
import {useDispatch, useSelector} from "react-redux";
import {closeFilters} from "../../redux/filterReducer";
import {VscSignOut} from "react-icons/all";
import Button from "../../common/Buttons/Button.component";
import {sighOut} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const Profile = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)
    const makeSighOut = () => dispatch(sighOut())

    useEffect(() => {
        document.title = 'MyProfile| Medias'
        dispatch(closeFilters())
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