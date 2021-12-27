import React from 'react';
import {ImgContaiter, MainImg, MainImgWrap, OtherImgs, SmallImg, SmallImgWrap} from "./MoreInfo.style";

const SmallImages = ({image, product, openPhotosModal, setImageId, imageId}) => {
    const openAndSet = (product, imageId) => {
        openPhotosModal(product)
        setImageId(imageId)
    }

    return <SmallImgWrap>
        <SmallImg src={image} onClick={() => openAndSet(product, imageId)}/>
    </SmallImgWrap>
}

const MainImage = ({image, product, openPhotosModal, setImageId}) => {

    const setAndOpen = (product, imageId) => {
        openPhotosModal(product)
        setImageId(imageId)
    }

    return <MainImgWrap>
        <MainImg src={image} onClick={() => setAndOpen(product, 0)}/>
    </MainImgWrap>
}

const MoreInfoImages = ({openPhotosModal, product, setImageId}) => {
    debugger
    return (
            <ImgContaiter>
                <MainImage image={product.image}
                           setImageId={setImageId}
                           openPhotosModal={openPhotosModal}
                           product={product}/>

                {Array.isArray(product.image)
                    ? <OtherImgs>
                        {product.image.map((image, i) => <SmallImages setImageId={setImageId}
                                                                      openPhotosModal={openPhotosModal}
                                                                      imageId={i}
                                                                      product={product}
                                                                      image={image} key={i}/>)}
                    </OtherImgs>
                    : null}
            </ImgContaiter>
    );
};

export default MoreInfoImages;