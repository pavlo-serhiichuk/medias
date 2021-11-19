import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import Button from "../../../common/Buttons/Button.component";
import {Operators, Title, Wrapper, Img, AmountContainer, Amount, Description} from "./CartProduct.style";

const CartProduct = ({product, deleteFromCart, increment, decrement}) => {
    return (
        <Wrapper>
            <Description>
            <Img image={product.image}/>
            <Title>{product.title}</Title>
            </Description>
            <Operators>
                <AmountContainer>
                    <Button amount width={'30px'} onClick={() => decrement(product.id, product.title)}><AiOutlineMinus/></Button>
                    <Amount>{product.amount}</Amount>
                    <Button amount width={'30px'} onClick={() => increment(product.id, product.title)}><AiOutlinePlus/></Button>
                </AmountContainer>
                <br/>
                <Button operator color={'dodgerblue'}>Open Popup</Button>
                <Button operator color={'indianred'} onClick={() => deleteFromCart(product.id, product.title)}>Delete</Button>
                <Button operator color={'green'} onClick={() => {
                }}>Buy</Button>
            </Operators>
        </Wrapper>
    );
};

export default CartProduct;