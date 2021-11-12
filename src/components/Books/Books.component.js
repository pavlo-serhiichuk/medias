import React from 'react';
import Wrapper from "./Books.styles";
import Book from "../Book/Book.component";

const Books = (props) => {

    if (props.books === undefined) return <div>Завантаження...</div>
    if (!props.books.length) return <div>Завантаження...</div>

    return (
        <Wrapper>
            {props.books
                .filter(book => book !== undefined)
                .map(book => <Book {...props} book={book} key={book.id}/>)}
        </Wrapper>
    );
};

export default Books;