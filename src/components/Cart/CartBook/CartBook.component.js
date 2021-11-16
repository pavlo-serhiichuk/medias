import React from 'react';
import styled from 'styled-components';
import Button from "../../../common/Buttons/Button.component";
import {BsPlusLg} from "react-icons/bs";
import {BiMinus} from "react-icons/bi";
import {Operators, Title, Wrapper, Img, Input, AmountWrap} from "./CartBook.style";


const CartBook = ({book, deleteFromCart}) => {
    return (

        <Wrapper>
            <Img image={book.image}/>
            <Title>{book.title}</Title>
            <Operators>
                <AmountWrap>
                    <Button color={'white'}><BiMinus/></Button>
                    <Input type={'text'} />
                    <Button color={'white'}><BsPlusLg/></Button>
                </AmountWrap>
                <br/>
                <Button color={'dodgerblue'}>Open Popup</Button>
                <Button color={'indianred'} onClick={() => deleteFromCart(book.id)}>Delete</Button>
            </Operators>
        </Wrapper>
    );
};

export default CartBook;