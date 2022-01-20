import styled from 'styled-components'
import {FlexWrap} from "../common/FlexWrap/FlexWrap";

export const Wrapper = styled.div`

`

export const ImagesContainer = styled.div`

`

export const MainImg = styled.img`
    max-width: 100%;
    width: 400px;
    margin: 0 auto 25px;
`

export const MainImgWrap = styled.div`
    margin: 0 auto;
    width: 400px;
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
