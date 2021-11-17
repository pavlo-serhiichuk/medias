import React from 'react';
import styled from 'styled-components';
import Button from "../../../common/Buttons/Button.component";
import {Operators, Title, Wrapper, Img, Input, Form} from "./CartBook.style";


const CartBook = ({cartBook, deleteFromCart, handleSubmit, register}) => {
    return (

        <Wrapper>
            <Img image={cartBook.image}/>
            <Title>{cartBook.title}</Title>
            <Operators>
                <Form onSubmit={handleSubmit}>
                        <Input type={'number'} {...register('amount', {required: true})} defaultValue={cartBook.amount} disabled/>
                </Form>
                <br/>
                <Button color={'dodgerblue'}>Open Popup</Button>
                <Button color={'indianred'} onClick={() => deleteFromCart(cartBook.id)}>Delete</Button>
            </Operators>
        </Wrapper>
    );
};

export default CartBook;