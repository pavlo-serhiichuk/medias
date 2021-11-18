import React from 'react';
import styled from 'styled-components';


// export const Wrapper = styled.div`
//         // background-color: #000;
//         margin: 0;
//         // padding: 5px;
//         // z-index: 1;
//         box-sizing: border-box;
// `

export const BookContent = styled.div`
    width: 200px;
    height: 320px;
    padding: 10px;
    background-image: url(${p => p.image});
    background-repeat: no-repeat;
    background-size: 200px;
    box-sizing: border-box;
`

export const Title = styled.div`
    transition : all .4s;
     opacity: 0;
     height: 248px;
     overflow: scroll;
     font-size: 25px;    
     font-weight: bold;
     color: white;
     text-shadow: #000 0.5px 0 11px;
     text-align:center; 
     cursor: pointer;
     &:hover {
        opacity: 1;
     }   
`
