import React, {useEffect} from 'react';
import {closeMoreInfoModal} from "../../redux/modalReducer";
import {useDispatch, useSelector} from "react-redux";
import MoreInfo from "./MoreInfo.component";

const MoreInfoContainer = () => {

    const dispatch = useDispatch()
    const currentProductId = useSelector(state => state.modal.currentProductId)

    const products = useSelector(state => state.products.products)
    const currentProduct = products.filter(book => book.id === currentProductId)
    const closeMoreInfo = () => dispatch(closeMoreInfoModal())
    const openPhotosPopupModal = () => {
        dispatch(op)
    }

    useEffect(() => {
        document.querySelector('[data-close]').addEventListener('click', event => {
            return event.target.dataset.close
                ? dispatch(closeMoreInfoModal())
                : null
        });
    }, [])

    return (
        <MoreInfo closeMoreInfo={closeMoreInfo} product={currentProduct[0]}/>
    );
};

export default MoreInfoContainer;