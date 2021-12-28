import {MainImg, MainImgWrap, SmallImg, SmallImgWrap} from "./PhotosPopup.style";
import React from "react";

export const SmallImage = ({img, setImageId, imageId}) => {
    return <SmallImgWrap>
        <SmallImg src={img} onClick={() => setImageId(imageId)}/>
    </SmallImgWrap>
}

export const MainImage = ({image}) => {
    return <MainImgWrap>
        <MainImg src={image}/>
    </MainImgWrap>
}
