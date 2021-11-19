import React from 'react';
import CartProduct from "./CartProduct.component";
import {useDispatch, useSelector} from "react-redux";
import {decrementAmount, incrementAmount} from "../../../redux/cartReducer";

const CartProductContainer = (props) => {

    const dispatch = useDispatch()
    const increment = (productID, title) => dispatch(incrementAmount(productID, title))
    const decrement = (productID, title) => dispatch(decrementAmount(productID, title))


    return (
        <>
            <CartProduct {...props}
                         increment={increment}
                         decrement={decrement}/>
        </>
    );
};

export default CartProductContainer;