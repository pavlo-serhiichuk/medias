import React from 'react';
import styled from 'styled-components'
import {BsXCircle as Close} from "react-icons/bs";

const ButtonWrap = styled.button`
    background-color: ${p => p.color || 'white'};
    margin: 5px 0;
    border-radius: 5px;
    width: 8%;
    position:absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    height: 30px;

      &:hover {
        opacity: 0.7;
    }
`

const CloseButton = (props) => {
    return <ButtonWrap {...props}>
        {props.component || <Close/>}
    </ButtonWrap>
};

export default CloseButton;