import React from 'react';
import CartProduct from "./CartProduct.component";
import {useDispatch} from "react-redux";
import {decrementAmount, incrementAmount} from "../../../redux/cartReducer";


const CartProductContainer = (props) => {

    const dispatch = useDispatch()
    const increment = (productID) => dispatch(incrementAmount(productID))
    const decrement = (productID) => dispatch(decrementAmount(productID))


    return (
        <>
            <CartProduct {...props}
                      increment={increment}
                      decrement={decrement}/>
        </>
    );
};

export default CartProductContainer;