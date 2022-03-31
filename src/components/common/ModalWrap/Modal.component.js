import React from 'react';
import {ModalContent, ModalWrap} from "./Modal.style";

const Modal = (props) => {
    return (
        <ModalWrap data-close>
            <ModalContent {...props}>
                {props.children}
            </ModalContent>
        </ModalWrap>
    );

};

export default Modal;