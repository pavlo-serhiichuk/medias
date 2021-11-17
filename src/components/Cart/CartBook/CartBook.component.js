import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import Button from "../../../common/Buttons/Button.component";
import {Operators, Title, Wrapper, Img, Input, Form, AmountContainer, Amount} from "./CartBook.style";


const CartBook = ({cartBook, deleteFromCart, handleSubmit, register, increment, decrement}) => {
    return (

        <Wrapper>
            <Img image={cartBook.image}/>
            <Title>{cartBook.title}</Title>
            <Operators>
                <AmountContainer>
                    <Button color={'grey'} width={'30px'} onClick={() => decrement(cartBook.id)}><AiOutlineMinus/></Button>
                    <Amount>{cartBook.amount}</Amount>
                    <Button color={'grey'} width={'30px'} onClick={() => increment(cartBook.id)}><AiOutlinePlus/></Button>
                </AmountContainer>
                <br/>
                <Button color={'dodgerblue'}>Open Popup</Button>
                <Button color={'indianred'} onClick={() => deleteFromCart(cartBook.id)}>Delete</Button>
                <Button color={'green'} onClick={() => {
                }}>Buy</Button>
            </Operators>
        </Wrapper>
    );
};

export default CartBook;