import {MainImg, MainImgWrap, SmallImg, SmallImgWrap} from "./PhotosPopup.style";
import React from "react";

export const SmallImage = ({img}) => {
    return <SmallImgWrap>
        <SmallImg src={img}/>
    </SmallImgWrap>
}

export const MainImage = ({image}) => {
    return <MainImgWrap>
        <MainImg src={image}/>
    </MainImgWrap>
}
