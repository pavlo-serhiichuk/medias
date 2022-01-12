import React from 'react';
import {Wrapper} from "./Cart.styles";
import {CART} from "../../utils/translations/translation";
import {getTranslation} from "../../utils/translations/getTranslation";
import CartProductContainer from "./CartProduct/CartProductContainer";

const Cart = (props) => {
    if (!props.cartProducts.length) {
        return (
            <Wrapper padTop={'150px'} data-testid='cart'>
                <h6>{getTranslation(CART.WARNING_MESSAGE, props.lang)}</h6>
            </Wrapper>
        )
    }

    return (
        <Wrapper display={'flex'} data-testid='cart'>
            {props.cartProducts.map(cartProduct => <CartProductContainer {...props} product={cartProduct}
                                                                         key={`${cartProduct.category}_${cartProduct.id}`}/>)}
        </Wrapper>
    );
};

export default Cart;