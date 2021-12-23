import React from 'react'
import styled from 'styled-components'
import {FlexWrap} from "../../common/FlexWrap/FlexWrap";

export const Wrapper = styled.div`

`

export const ImgContainer = styled.div`

`

export const MainImg = styled.img`
    max-width: 100%;
    width: 90%;
    margin: 0 auto;
`

export const MainImgWrap = styled.div`
    height: 65px;
   
`

export const OtherImgs = styled(FlexWrap)`
    gap: 5px;
    overflow: scroll;
    height: 100px;
    padding-bottom: 20px;
`

export const SmallImg = styled.img`
    width: 76px;
    max-height: 65px;
    object-fit: cover;
    object-position: 50% 50%;
`

export const SmallImgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    // height: 50px;
    border:  5px solid #ebede8;
    border-radius: 5px;
    z-index: 1002;
    &:hover {
       border: 5px solid #72ae4a;
    }
`

export const SmallImage = ({img}) => {
    return <SmallImgWrap>
        <SmallImg src={img}/>
    </SmallImgWrap>
}

export const MainImage = ({img}) => {
    return <MainImgWrap>
        <MainImg src={img}/>
    </MainImgWrap>
}

