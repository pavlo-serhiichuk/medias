import React, {useEffect} from 'react';
import {connect} from "react-redux";
import { useHistory } from "react-router-dom";

import {VscSignOut as ExitIcon} from "react-icons/vsc";

import {Avatar, Content, History, UserInfo, Wrapper} from "./Profile.style";

import {sighOut} from "../../redux/authReducer";
import {hideSidebar} from "../../redux/sidebarReducer";
import {changeCategory} from "../../redux/productsReducer";

import {RedButton} from "../common/Buttons/Button.component";

import {AUTH} from "../../utils/translations/translation";
import {getTranslation} from "../../utils/translations/getTranslation";

const Profile = (props) => {
    let history = useHistory();

    const makeSighOut = () => {
        props.sighOut()
        props.changeCategory('books')
        history.push('/')
    }

    useEffect(() => {
        document.title = 'MyProfile| Medias'
        props.hideSidebar()
    }, [])

    return (
        <Wrapper>
            <Content>
                <Avatar />
                    <UserInfo></UserInfo>
                    <History></History>
                    <RedButton signOut color={'indianred'} onClick={makeSighOut}>
                        <ExitIcon/> {getTranslation(AUTH.EXIT, props.lang)}
                    </RedButton>
            </Content>
        </Wrapper>
    );
};

const mstp = state => ({
    isAuth: state.auth.isAuth,
    lang: state.lang.language
})

export default connect(mstp, {
    sighOut, changeCategory, hideSidebar
})(Profile);