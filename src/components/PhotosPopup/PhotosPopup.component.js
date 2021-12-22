import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {connect} from "react-redux";
import {closePhotosPopup} from "../../redux/modalReducer";

const PhotosPopup = (props) => {
    const {product, closePhotosPopup} = props
    return (
        <Modal>
            <CloseButton onClick={closePhotosPopup}/>
            {product.title}
        </Modal>
    );
};

const mstp = state => ({
    product: state.products.currentProduct,
})

export default connect(mstp, {closePhotosPopup})(PhotosPopup);