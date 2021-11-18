import React from 'react';
import {Wrapper} from "./Cart.styles";
import CartBook from "./CartProduct/CartProduct.component";
import {BsCartX} from "react-icons/bs";
import CartProductContainer from "./CartProduct/CartProductContainer";

const Cart = (props) => {

    if (props.cartProducts.length < 1) {
        return (
            <Wrapper padTop={'150px'}>
                <h6>Упс... You haven't added anything to your <BsCartX/>. It's empty...
                    Please, turn back to All Elements and choose something.</h6>
            </Wrapper>
        )
    }

    return (
        <Wrapper display={'flex'}>
            {props.cartProducts.map(cartProduct => <CartProductContainer {...props} cartProduct={cartProduct} key={cartProduct.id}/>)}
        </Wrapper>
    );
};

export default Cart;