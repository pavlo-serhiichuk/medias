import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {Content, Description, Features} from "./MoreInfo.style";
import {BigTitle, MiddleTitle} from "../../common/Titles/Titles";
import {Img} from "../../common/Imgs/Imgs";

const MoreInfo = ({closeMoreInfo, currentProduct}) => {

    return (
        <Modal width={'80%'}>
            <CloseButton onClick={closeMoreInfo}/>
            <Content>
                <BigTitle>{currentProduct.title}</BigTitle>
                <MiddleTitle price>{currentProduct.price}</MiddleTitle>
                <Img image={currentProduct.image}/>
                {currentProduct.features
                && <Features>
                    <h5>Features: </h5>
                    {currentProduct.features.map(item => <li>{item}</li>)}
                </Features>}
                <Description>{currentProduct.description}</Description>
            </Content>
        </Modal>
    );
};

export default MoreInfo;