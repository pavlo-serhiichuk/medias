import styled from 'styled-components'
import React from "react";
import {FlexWrap} from "../common/FlexWrap/FlexWrap";

export const Content = styled.div`
    display: grid;
    grid-template-columns: 280px 2fr;
    grid-gap: 15px;
    overflow: scroll;
    height: 500px;
`

export const ImgContaiter = styled.div`
    display: grid;
    grid-gap: 10px;
    height: 18%;
    max-width: 280px;
`

export const OtherImgs = styled(FlexWrap)`
    flex-wrap: wrap;
    gap: 5px;
`

export const Description = styled.div`
    margin-top: 30px;
`

export const Features = styled.ul`
`

export const Li = styled.li`
    width: 63px;
`

export const MainImg = styled.img`
    max-width: 100%;
    width: 268px;
`

export const MainImgWrap = styled.div`
`

export const SmallImg = styled.img`
    width: 76px;
    max-height: 65px;
    object-fit: cover;
    object-position: 50% 50%;
`

export const SmallImgWrap = styled.div`
    border:  5px solid #ebede8;
    border-radius: 5px;
    z-index: 1002;
    display: flex;
    justify-content: center; /*Центрирование по горизонтали*/
    align-items: center; 
  &:hover {
    border: 5px solid #72ae4a;
  }
`

