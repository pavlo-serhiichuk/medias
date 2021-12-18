import React from 'react';
import styled from 'styled-components'

export const Wrapper = styled.div`
    
    min-height: 100vh;
    margin: 0 auto;
    width: 1027px;
    // padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    
    @media screen and (max-width: 992px) {width: 818px;}
    @media screen and (max-width: 768px) {width: 635px;}
    @media screen and (max-width: 576px) {width: 428px;}
`

export const Content = styled.div`
      display: flex;
      flex-direction: row;
      
      // grid-template-columns: 190px 1fr; 
      position: relative;
      // height: 100vh;
`

