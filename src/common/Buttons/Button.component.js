import React from 'react';
import styled from 'styled-components'

const SButton = styled.button`
    display: ${p => p.display};
    justify-content: ${p => p.justify};
    width: ${p => p.width ||  '100%'};
    background-color: ${p => p.sighOut && 'indianred' || p.color || p.amount && '#c9cbc9' || 'dodgerblue'};
    border-radius: ${p => p.operator && '0px' || '5px'};
    border: none;
    outline: none;
    &:hover {
        background-color: ${p => p.signOut && '#cd6330' || p.wishes && '#00AE00' || `#46B8FF`};
    }
`

const Button = (props) => {
    return <SButton {...props}/>
};

export default Button;