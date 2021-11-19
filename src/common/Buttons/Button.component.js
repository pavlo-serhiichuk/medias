import React from 'react';
import styled from 'styled-components'

const SButton = styled.button`
    display: ${p => p.display};
    justify-content: ${p => p.justify &&  p.justify};
    width: ${p => p.width ||  '100%'};
    margin: 5px 0;
    background-color: ${p => p.color || p.amount && '#c9cbc9' || 'dodgerblue'};
    border-radius: ${p => p.operator && '0px' || '5px'};
    border: none;
    outline: none;
    &:hover {
        background-color: #46B8FF;
    }
`

const Button = (props) => {
    return <SButton {...props}/>
};

export default Button;