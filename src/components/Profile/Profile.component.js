import React, {useEffect} from 'react';
import {Avatar, Content, History, UserInfo, Wrapper} from "./Profile.style";
import {useDispatch, useSelector} from "react-redux";
import {getAsyncArticles} from "../../redux/articlesReducer";
import {closeFilters} from "../../redux/filterReducer";

const Profile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        document.title = 'MyProfile| Medias'
        dispatch(closeFilters())
    }, [])


    return (
        <Wrapper>
            <Content>
                <Avatar />
                    <UserInfo></UserInfo>
                    <History></History>
            </Content>
        </Wrapper>
    );
};

export default Profile;