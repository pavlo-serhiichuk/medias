import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import Button from "../../../common/Buttons/Button.component";
import {Operators, Title, Wrapper, Img, Input, Form, AmountContainer, Amount} from "./CartProduct.style";


const CartProduct = ({cartProduct, deleteFromCart, increment, decrement}) => {
    return (

        <Wrapper>
            <Img image={cartProduct.image}/>
            <Title>{cartProduct.title}</Title>
            <Operators>
                <AmountContainer>
                    <Button color={'grey'} width={'30px'} onClick={() => decrement(cartProduct.id)}><AiOutlineMinus/></Button>
                    <Amount>{cartProduct.amount}</Amount>
                    <Button color={'grey'} width={'30px'} onClick={() => increment(cartProduct.id)}><AiOutlinePlus/></Button>
                </AmountContainer>
                <br/>
                <Button color={'dodgerblue'}>Open Popup</Button>
                <Button color={'indianred'} onClick={() => deleteFromCart(cartProduct.id)}>Delete</Button>
                <Button color={'green'} onClick={() => {
                }}>Buy</Button>
            </Operators>
        </Wrapper>
    );
};

export default CartProduct;