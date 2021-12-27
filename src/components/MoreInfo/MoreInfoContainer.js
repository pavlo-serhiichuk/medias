import React, {useEffect} from 'react';
import {closeMoreInfoModal, openPhotosPopup} from "../../redux/modalReducer";
import {useDispatch, useSelector} from "react-redux";
import MoreInfo from "./MoreInfo.component";
import {setCurrentProduct} from "../../redux/productsReducer";
import {setCurrentImageId, setImages} from "../../redux/imagesReducer";

const MoreInfoContainer = () => {

    const dispatch = useDispatch()
    const currentProductId = useSelector(state => state.modal.currentProductId)

    const products = useSelector(state => state.products.products)
    const currentProduct = products.filter(book => book.id === currentProductId)
    const closeMoreInfo = () => dispatch(closeMoreInfoModal())
    let currentImgId = useSelector(state => state.images.currentImgId)
    let images = useSelector(state => state.images.images)

    const openPhotosModal = (product) => {
        dispatch(setCurrentProduct(product))
        dispatch(openPhotosPopup())
    }

    const setImageId = (imageId) => dispatch(setCurrentImageId(imageId))

    useEffect(() => {
        document.querySelector('[data-close]')
            .addEventListener('click', event => {
                return event.target.dataset.close ? dispatch(closeMoreInfoModal()) : null
            });

       dispatch(setImages(currentProduct[0].image))
    }, [])

    return (
        <MoreInfo currentImgId={currentImgId}
                  openPhotosModal={openPhotosModal}
                  closeMoreInfo={closeMoreInfo}
                  images={images}
                  setImageId={setImageId}
                  product={currentProduct[0]}/>
    );
};

export default MoreInfoContainer;