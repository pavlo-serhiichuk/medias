import React from 'react';
import {Wrapper} from "./Cart.styles";
import CartBook from "./CartBook.component";
import {BsCartX} from "react-icons/bs";

const Cart = (props) => {

    if (props.cartBooks.length < 1) {
        return (
            <Wrapper padTop={'150px'}>
                <h6>Упс... You haven't added anything to your <BsCartX/>. It's empty...
                    Please, turn back to All Elements and choose something.</h6>
            </Wrapper>
        )
    }

    return (
        <Wrapper display={'flex'}>
            {props.cartBooks.map(book => <CartBook {...props} book={book} key={book.id}/>)}
        </Wrapper>
    );
};

export default Cart;