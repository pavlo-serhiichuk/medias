import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
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