import React from 'react';
import ReactTooltip from "react-tooltip"
import {ImgContaiter, MainImg, MainImgWrap, OtherImgs, SmallImg, SmallImgWrap} from "../MoreInfo.style";

const SmallImages = ({image, product, openPhotosModal, setImageId, imageId}) => {

    const openPhotos = (product, imageId) => {
        openPhotosModal(product)
        setImageId(imageId)
    }

    return <SmallImgWrap>
        <SmallImg
            src={image}
            data-tip="press to open full size"
            onClick={() => openPhotos(product, imageId)}/>
        <ReactTooltip place="right"/>
    </SmallImgWrap>
}

const MainImage = ({image, product, openPhotosModal, setImageId}) => {

    const openPhotos = (product, imageId) => {
        openPhotosModal(product)
        setImageId(imageId)
    }

    return <MainImgWrap>
        <MainImg src={image} onClick={() => openPhotos(product, 0)}/>
    </MainImgWrap>
}

const MoreInfoImages = ({openPhotosModal, product, setImageId}) => {
    return (
            <ImgContaiter>
                <MainImage
                    image={product.image}
                    setImageId={setImageId}
                    openPhotosModal={openPhotosModal}
                    product={product}
                />

                {Array.isArray(product.image)
                    ? <OtherImgs>
                        {product.image.map((image, i) =>
                            <SmallImages
                                setImageId={setImageId}
                                openPhotosModal={openPhotosModal}
                                imageId={i}
                                product={product}
                                image={image}
                                key={i}
                            />
                        )}
                    </OtherImgs>
                    : null}
            </ImgContaiter>
    );
};

export default MoreInfoImages;