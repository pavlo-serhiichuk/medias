import React from 'react';
import {Avatar, Content, History, UserInfo, Wrapper} from "./Profile.style";

const Profile = () => {
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