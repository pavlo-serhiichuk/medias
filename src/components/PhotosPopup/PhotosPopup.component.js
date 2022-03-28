import React from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {ImagesContainer, OtherImgs, Wrapper} from "./PhotosPopup.style";

import {closePhotosPopup} from "../../redux/modalReducer";
import {setCurrentImageId} from "../../redux/imagesReducer";
import Modal from "../common/ModalWrap/Modal.component";
import CloseButton from "../common/Buttons/CloseButton.component";
import {MainImage, SmallImage} from "./Images.component";

const PhotosPopup = ({product, closePhotosPopup}) => {
    const {image, title} = product

    const dispatch = useDispatch()
    const images = useSelector(state => state.images.images)
    const currentImgId = useSelector(state => state.images.currentImgId)
    const currentImage = images.filter(image => image.id === currentImgId)

    const setImageId = imageId => dispatch(setCurrentImageId(imageId))

    return (
        <Modal width={'55%'}>
            <CloseButton onClick={closePhotosPopup}/>
            <Wrapper>
                {title}
                <ImagesContainer>
                    <MainImage image={currentImage[0].image}/>
                    {Array.isArray(image)
                        ? <OtherImgs>
                        {images.map(image =>
                            <SmallImage
                                key={image.id}
                                setImageId={setImageId}
                                imageId={image.id}
                                img={image.image}
                                key={image.id}/>)}
                    </OtherImgs>
                        : null}
                </ImagesContainer>
            </Wrapper>
        </Modal>
    );
};

const mstp = state => ({
    product: state.products.currentProduct,
})

export default connect(mstp, {closePhotosPopup})(PhotosPopup);