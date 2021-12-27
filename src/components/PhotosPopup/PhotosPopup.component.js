import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {connect, useDispatch, useSelector} from "react-redux";
import {closePhotosPopup} from "../../redux/modalReducer";
import {ImagesContainer, OtherImgs, Wrapper} from "./PhotosPopup.style";
import {MainImage, SmallImage} from "./Images.component";
import {setCurrentImageId} from "../../redux/imagesReducer";

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
                        {images.map(image => <SmallImage setImageId={setImageId} imageId={image.id} img={image.image} key={image.id}/>)}
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