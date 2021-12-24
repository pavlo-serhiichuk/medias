import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {connect} from "react-redux";
import {closePhotosPopup} from "../../redux/modalReducer";
import {ImagesContainer, MainImage, OtherImgs, SmallImage, Wrapper} from "./PhotosPopup.style";

const PhotosPopup = (props) => {
    const {product, closePhotosPopup} = props

    debugger
    const {image, title} = product

    return (
        <Modal width={'55%'}>
            <CloseButton onClick={closePhotosPopup}/>
            <Wrapper>
                {title}
                <ImagesContainer>
                    <MainImage image={image}/>
                    {Array.isArray(image)
                        ? <OtherImgs>
                        {image.map(img => <SmallImage img={img}/>)}
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