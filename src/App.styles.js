import React from 'react';
import styled from 'styled-components'

export const Wrapper = styled.div`
    
    min-height: 100vh;
    margin: 0 auto;
    width: 1019px;
    // padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    
    @media screen and (max-width: 992px) {width: 810px;}
    @media screen and (max-width: 768px) {width: 620px;}
    @media screen and (max-width: 576px) {width: 409px;}
`

export const Content = styled.div`
      display: grid;
      grid-template-columns: 190px 1fr; 
      position: relative;
`

