import React from 'react';
import {AiOutlineShoppingCart as Cart} from "react-icons/ai";
import Modal from "../common/ModalWrap/Modal.component";
import CloseButton from "../common/Buttons/CloseButton.component";
import {Buttons, ButtonsWrap, Content, Description, Features, InfoContainer} from "./MoreInfo.style";
import {BigTitle, MiddleTitle} from "../common/Titles/Titles";
import MoreInfoImages from "./MoreInfoImages/MoreInfoImages.component";
import {PrimaryButton, SuccessButton} from "../common/Buttons/Button.component";
import {BiHeart as Liked} from "react-icons/bi";
import {getTranslation} from "../../utils/translations/getTranslation";
import {PRODUCT} from "../../utils/translations/translation";


const MoreInfo = (props) => {
    const {closeMoreInfo, product} = props

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
                        {getTranslation(PRODUCT.CART.TITLE)}<Cart/>
                    </PrimaryButton>
                    <SuccessButton onClick={() => {
                    }}>
                        {getTranslation(PRODUCT.WISHES.TITLE)} <Liked/>
                    </SuccessButton>
                </Buttons>
            </ButtonsWrap>
        </Modal>
    );
};

export default MoreInfo;