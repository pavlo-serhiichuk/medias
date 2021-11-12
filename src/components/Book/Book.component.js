import React from 'react';
import {BookContent, Title} from "./Book.styles";
import Button from "../../common/Buttons/Button.component";
import {openMoreInfoModal} from "../../redux/modalReducer";
import {useDispatch} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai"

const Book = ({isAuth, book, addToCart}) => {
    const dispatch = useDispatch()

    return (
            <BookContent image={book.image}>

                <Title onClick={() => dispatch(openMoreInfoModal(book.id))}>
                    {book.title}
                </Title>
                {isAuth
                    ? <Button color={'dodgerblue'} onClick={() => addToCart(book)}>Add
                        to <AiOutlineShoppingCart/></Button>
                    : <Button color={'dodgerblue'} onClick={() => alert('Please, sigh in first! Asshole!!')}>Add
                        to <AiOutlineShoppingCart/></Button>}
            </BookContent>

    );
};

export default Book;