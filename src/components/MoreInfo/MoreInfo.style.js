import styled from 'styled-components'
import {FlexWrap} from "../../common/FlexWrap/FlexWrap";

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

export const OtherImgs = styled.div`
    display: flex;
    flex-direction: row;
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

export const InfoImg = styled.img`
    max-width: 100%;
    width: 268px;
`

export const SmallImg = styled.img`
    width: 61px;
    max-height: 55px;
    object-fit: cover;
    object-position: 50% 50%;
  
`

const SmallImgContainer = styled.div`
    border:  1px solid rgba(210, 217, 217, 0.89);
d    z-index: 1002;
    display: flex;
    justify-content: center; /*Центрирование по горизонтали*/
    align-items: center; 
`

export const SmallImgCont = (props) => {
    return <SmallImgContainer>{props.children}</SmallImgContainer>
}