import React from 'react';
import styled from 'styled-components'

export const Content = styled.div`
    display: block;
    margin: 0 auto;
    width: 839px;
    // border-left: 1px solid gray;
    // border-right: 1px solid gray;
    padding: 10px;
    // height:100vh;
    box-sizing: border-box;
    background-color: #fff;
    
    @media screen and (max-width: 1200px) {width: 839px;}
    @media screen and (max-width: 992px) {width: 630px;}
    @media screen and (max-width: 768px) {width: 630px;}
    @media screen and (max-width: 576px) {width: 429px;}
`
