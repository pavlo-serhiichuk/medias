import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {Content, Description} from "./MoreInfo.style";
import {BigTitle} from "../../common/Titles/Titles";
import {Img} from "../../common/Imgs/Imgs";

const MoreInfo = ({closeMoreInfo, currentProduct}) => {

    return (
        <Modal width={'80%'}>
            <CloseButton onClick={closeMoreInfo}/>
            <Content>
                <BigTitle>{currentProduct[0].title}</BigTitle>
                <Img image={currentProduct[0].image}/>
                <Description>{currentProduct[0].description}</Description>
            </Content>
        </Modal>
    );
};

export default MoreInfo;