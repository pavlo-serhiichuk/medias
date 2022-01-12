import React from 'react';
import {BiHeart as Liked} from "react-icons/bi";
import {AiOutlineShoppingCart as Cart} from "react-icons/ai";
import {Buttons, ButtonsWrap, Content, Description, Features, InfoContainer} from "./MoreInfo.style";
import Modal from "../common/ModalWrap/Modal.component";
import {BUTTON} from "../../utils/translations/translation";
import CloseButton from "../common/Buttons/CloseButton.component";
import {BigTitle, MiddleTitle} from "../common/Titles/Titles";
import MoreInfoImages from "./MoreInfoImages/MoreInfoImages.component";
import {getTranslation} from "../../utils/translations/getTranslation";
import {PrimaryButton, SuccessButton} from "../common/Buttons/Button.component";

const MoreInfo = (props) => {
    const {closeMoreInfo, product, lang} = props

    const {
        author,
        producer,
        price,
        features,
        title,
        conditions,
        rating,
        gunres,
        description
    } = product

    return (
        <Modal width={'80%'}>
            <CloseButton onClick={closeMoreInfo}/>
            <Content>
                <MoreInfoImages  {...props}/>
                <InfoContainer>
                    <BigTitle>{title}</BigTitle>
                    {author && <MiddleTitle producer>{author}</MiddleTitle>}
                    {producer && <MiddleTitle author>{producer}</MiddleTitle>}

                    <MiddleTitle price>${price}</MiddleTitle>
                    {rating && <MiddleTitle>Rating: {rating}</MiddleTitle>}

                    {features && <Features>
                        <h5>Features: </h5>
                        {features.map(item => <li>{item}</li>)}
                    </Features>}

                    {conditions && <Features>
                        <h5>Conditions: </h5>
                        {conditions.map(item => <li>{item}</li>)}
                    </Features>}

                    {gunres && <Features>
                        <h5>Gunres: </h5>
                        {gunres.map(item => <li>{item}</li>)}
                    </Features>}

                    <Description>{description}</Description>
                </InfoContainer>
            </Content>
            <ButtonsWrap>

                <Buttons>
                    <PrimaryButton color={'dodgerblue'} onClick={() => {
                    }}>
                        {getTranslation(BUTTON.CART.TITLE, lang)}<Cart/>
                    </PrimaryButton>
                    <SuccessButton onClick={() => {
                    }}>
                        {getTranslation(BUTTON.WISHES.TITLE, lang)} <Liked/>
                    </SuccessButton>
                </Buttons>
            </ButtonsWrap>
        </Modal>
    );
};

export default MoreInfo;