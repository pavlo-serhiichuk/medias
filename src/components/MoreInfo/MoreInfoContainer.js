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

    useEffect(() => {
        document.querySelector('[data-close]').addEventListener('click', event => {
                if(event.target.dataset.close) return dispatch(closeMoreInfoModal())
            });
    }, [])

    return (
        <MoreInfo closeMoreInfo={closeMoreInfo} currentProduct={currentProduct[0]}/>
    );
};

export default MoreInfoContainer;