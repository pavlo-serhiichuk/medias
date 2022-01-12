import React from 'react';
import {AiOutlineMinus as Minus, AiOutlinePlus as Plus} from 'react-icons/ai';
import Button, {PrimaryButton, RedButton, SuccessButton} from "../../common/Buttons/Button.component";
import {Operators, Title, Wrapper, Img, AmountContainer, Amount, Description} from "./CartProduct.style";
import {getTranslation} from "../../../utils/translations/getTranslation";
import {BUTTON} from "../../../utils/translations/translation";

const CartProduct = ({product, deleteFromCart, increment, decrement, moreInfo, lang}) => {

    return (
        <Wrapper>
            <Description>
                <Img image={product.image}/>
                <Title>{product.title}</Title>
            </Description>
            <Operators>
                <AmountContainer>
                    <Button
                        amount
                        width={'30px'}
                        onClick={() => decrement(product.id, product.title)}>
                        <Minus/>
                    </Button>
                    <Amount>{product.amount}</Amount>
                    <Button
                        amount
                        width={'30px'}
                        onClick={() => increment(product.id, product.title)}>
                        <Plus/>
                    </Button>
                </AmountContainer>
                <SuccessButton
                    operator={true.toString()}
                    color={'dodgerblue'} onClick={() => moreInfo}>
                    {getTranslation(BUTTON.MORE_INFO, lang)}
                </SuccessButton>
                <RedButton
                    operator={true.toString()} color={'indianred'}
                    onClick={() => deleteFromCart(product.id, product.title)}>
                    {getTranslation(BUTTON.DELETE, lang)}
                </RedButton>
                <PrimaryButton
                    operator={true.toString()}
                    color={'green'}>
                    {getTranslation(BUTTON.BUY, lang)}
                </PrimaryButton>
            </Operators>
        </Wrapper>
    );
};

export default CartProduct;