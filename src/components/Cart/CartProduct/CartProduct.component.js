import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import Button from "../../common/Buttons/Button.component";
import {Operators, Title, Wrapper, Img, AmountContainer, Amount, Description} from "./CartProduct.style";
import {openMoreInfoModal} from "../@Redux/modalReducer";

const CartProduct = ({product, deleteFromCart, increment, decrement, moreInfo}) => {

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
                <Button operator={true.toString()} color={'dodgerblue'} onClick={() => moreInfo}>More  Info</Button>
                <Button operator={true.toString()} color={'indianred'} onClick={() => deleteFromCart(product.id, product.title)}>Delete</Button>
                <Button operator={true.toString()} color={'green'} onClick={() => {
                }}>Buy</Button>
            </Operators>
        </Wrapper>
    );
};

export default CartProduct;