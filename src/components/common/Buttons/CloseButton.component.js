import React from 'react';
import styled from 'styled-components'
import {GrClose as Close} from "react-icons/gr";

const ButtonWrap = styled.button`
    position:absolute;
    top: 0;
    right: 0;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
    outline: none;
    height: 30px;
    background-color: ${p => p.color || 'white'};
    &:hover {
        opacity: 0.7;
    }
`

const CloseButton = (props) => {
    return <ButtonWrap {...props}>
        {props.component || <Close size={40}/>}
    </ButtonWrap>
};

export default CloseButton;