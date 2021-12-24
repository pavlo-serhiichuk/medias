import React from 'react';
import {ImgContaiter, MainImg, MainImgWrap, OtherImgs, SmallImg, SmallImgWrap} from "./MoreInfo.style";

const SmallImages = ({img, product, openPhotosModal}) => {
    return <SmallImgWrap>
        <SmallImg src={img} onClick={() => openPhotosModal(product)}/>
    </SmallImgWrap>
}

const MainImage = ({image, product, openPhotosModal}) => {
    return <MainImgWrap>
        <MainImg src={image} onClick={() => openPhotosModal(product)}/>
    </MainImgWrap>
}

const Images = ({openPhotosModal, product}) => {
    return (
            <ImgContaiter>
                <MainImage image={product.image}
                           openPhotosModal={openPhotosModal}
                           product={product}/>
                {Array.isArray(product.image)
                    ? <OtherImgs>
                        {product.image.map((img, i) => <SmallImages openPhotosModal={openPhotosModal}
                                                            product={product} img={img} key={i}/>)}
                    </OtherImgs>
                    : null}
            </ImgContaiter>
    );
};

export default Images;