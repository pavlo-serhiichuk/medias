import React from 'react';
import {Link} from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import {BsCart4 as CartIcon} from "react-icons/bs";
import {BiHeart as LikedIcon} from "react-icons/bi";

import {Header, ContentWrapper, Left, Article, UserNeeds, Right, Amount, Image, LinkWrap} from './Header.style.js';

import {getTranslation} from "../../utils/translations/getTranslation";

import API from "../../api/routerApi";
import {SmallProfilePhoto} from "../common/Imgs/Imgs";
import {PrimaryButton, GoldButton} from "../common/Buttons/Button.component";

import {AUTH} from "../../utils/translations/translation";

export default ({
                    cart,
                    wishes,
                    avatar,
                    getAsyncWishes,
                    close,
                    isAuth,
                    profilePhoto,
                    username,
                    uaFlag,
                    gbFlag,
                    userId,
                    lang,
                    setLanguage,
                    openLoginModal,
                    openSignInModal
                }) => {

    return (
        <Header data-testid="header">
            <ContentWrapper>
                <Left>
                    <Article>
                        <Link to={API.articles.path} onClick={close}>medias</Link>
                    </Article>
                    <div>
                        <Image src={uaFlag} onClick={() => setLanguage('ua')}/>
                        <Image src={gbFlag} onClick={() => setLanguage('en')}/>
                    </div>
                </Left>
                <UserNeeds>
                    {isAuth &&
                        <>
                            {/*Profile*/}
                            <LinkWrap>
                                <Link
                                    to={`${API.profile.path}?=${userId}`}
                                    onClick={close}
                                    data-tip="your profile"
                                >
                                    <ReactTooltip place="bottom"/>
                                    <SmallProfilePhoto profilePhoto={profilePhoto || avatar}/>
                                    <span>{username}</span>
                                </Link>
                            </LinkWrap>
                            {/*Wishes*/}
                            <LinkWrap>
                                <Link
                                    onClick={close}
                                    to={API.wishes.path}
                                    data-tip="your Wishes"
                                >
                                    <ReactTooltip place="bottom"/>
                                    <LikedIcon size={25}/>
                                    <Amount onClick={getAsyncWishes}>{wishes > 0 && wishes}</Amount>
                                </Link>
                            </LinkWrap>
                            {/*Cart*/}
                            <LinkWrap>
                                <Link
                                    onClick={close}
                                    to={API.cart.path}
                                    data-tip="your Cart"
                                >
                                    <CartIcon size={25}/>
                                    <ReactTooltip place="bottom"/>
                                    <Amount>{cart > 0 && cart}</Amount>
                                </Link>
                            </LinkWrap>
                        </>}
                </UserNeeds>
                {!isAuth &&
                    <Right>
                        <GoldButton height='60px' onClick={openLoginModal}>
                            {getTranslation(AUTH.LOGIN.TITLE, lang)}
                        </GoldButton>
                        <PrimaryButton height='60px' onClick={openSignInModal}>
                            {getTranslation(AUTH.SIGNIN.TITLE, lang)}
                        </PrimaryButton>
                    </Right>
                }
            </ContentWrapper>
        </Header>
    );
};
