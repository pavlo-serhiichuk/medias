import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import MoreInfo from "./MoreInfo.component";
import {setCurrentProduct} from "@Redux/productsReducer";
import {setCurrentImageId, setImages} from "@Redux/imagesReducer";
import {closeMoreInfoModal, closePhotosPopup, openPhotosPopup} from "@Redux/modalReducer";

const MoreInfoContainer = () => {

    const dispatch = useDispatch()
    const currentProductId = useSelector(state => state.modal.currentProductId)

    const products = useSelector(state => state.products.products)
    const currentProduct = products.filter(book => book.id === currentProductId)
    let isPhotosPopupOpen = useSelector(state => state.modal.isPhotosPopupOpen)
    let currentImgId = useSelector(state => state.images.currentImgId)

    const closeMoreInfo = () => dispatch(closeMoreInfoModal())

    const openPhotosModal = product => {
        dispatch(setCurrentProduct(product))
        dispatch(openPhotosPopup())
    }

    const setImageId = (imageId) => dispatch(setCurrentImageId(imageId))

    useEffect(() => {

        document.querySelector('[data-close]')
            .addEventListener('click', event => {
                return event.target.dataset.close && !isPhotosPopupOpen
                    ? dispatch(closeMoreInfoModal())
                    : dispatch(closePhotosPopup())
            });

        dispatch(setImages(currentProduct[0].image))
    }, [])

    return (
        <MoreInfo currentImgId={currentImgId}
                  openPhotosModal={openPhotosModal}
                  closeMoreInfo={closeMoreInfo}
                  setImageId={setImageId}
                  product={currentProduct[0]}/>
    );
};

export default MoreInfoContainer;