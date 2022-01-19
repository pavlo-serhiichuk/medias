import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    margin: 0 auto;
    width: 1065px;
    box-sizing: border-box;
    background-color: #fff;
  
    @media screen and (max-width: 992px) {width: 856px;}
    @media screen and (max-width: 768px) {width: 643px;}
    @media screen and (max-width: 576px) {width: 440px;}
`

export const Routers = styled.div`
       width: 100%;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;    
    position: relative;
`
