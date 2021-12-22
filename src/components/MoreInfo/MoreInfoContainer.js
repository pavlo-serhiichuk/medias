import React, {useEffect} from 'react';
import {closeMoreInfoModal, openPhotosPopup} from "../../redux/modalReducer";
import {useDispatch, useSelector} from "react-redux";
import MoreInfo from "./MoreInfo.component";
import {setProductPhotos} from "../../redux/productsReducer";

const MoreInfoContainer = () => {

    const dispatch = useDispatch()
    const currentProductId = useSelector(state => state.modal.currentProductId)

    const products = useSelector(state => state.products.products)
    const currentProduct = products.filter(book => book.id === currentProductId)
    const closeMoreInfo = () => dispatch(closeMoreInfoModal())

    const openPhotosModal = (images) => {
        console.log('openPhotosPopupModal')
        dispatch(setProductPhotos(images))
        dispatch(openPhotosPopup())

    }

    useEffect(() => {
        document.querySelector('[data-close]').addEventListener('click', event => {
            return event.target.dataset.close
                ? dispatch(closeMoreInfoModal())
                : null
        });
    }, [])

    return (
        <MoreInfo openPhotosModal={openPhotosModal}
                  closeMoreInfo={closeMoreInfo}
                  product={currentProduct[0]}/>
    );
};

export default MoreInfoContainer;