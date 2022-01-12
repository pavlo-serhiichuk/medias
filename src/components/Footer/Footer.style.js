import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    height: 150px;
    background-color: dodgerblue;
`

export const Content = styled.div`
       width: 1065px;
       margin: 0 auto;
       padding: 20px 0;
       background-color: dodgerblue;
        @media screen and (max-width: 992px) {width: 856px;}
        @media screen and (max-width: 768px) {width: 643px;}
        @media screen and (max-width: 576px) {width: 440px;}
`

export const Strong = styled.strong`
    font-size: 30px;
`

export const SocialMedias = styled.div`
    // margin-right: 10px;
    display: flex;
    justify-content: end;
    align-items: center; 
`
