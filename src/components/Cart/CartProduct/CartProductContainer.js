import React from 'react';
import CartProduct from "./CartProduct.component";
import {useDispatch} from "react-redux";
import {decrementAmount, incrementAmount} from "../../../redux/cartReducer";
import {openMoreInfoModal} from "../../../redux/modalReducer";

const CartProductContainer = (props) => {
    const dispatch = useDispatch()
    const moreInfo = () => dispatch(openMoreInfoModal(props.product.id))
    const increment = (productID, title) => dispatch(incrementAmount(productID, title))
    const decrement = (productID, title) => dispatch(decrementAmount(productID, title))

    return (
        <>
            <CartProduct {...props}
                         moreInfo={moreInfo}
                         increment={increment}
                         decrement={decrement}/>
        </>
    );
};

export default CartProductContainer;