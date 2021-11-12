import React from 'react';
import Books from "./Books.component";
import {connect} from "react-redux";
import {getAsyncElements} from "../../redux/booksReducer";
import {addToCart} from "../../redux/cartReducer";

class BooksContainer extends React.Component {

    componentDidMount() {
        this.props.getAsyncElements()
        document.title = 'Books| Medias'
    }
    render() {
        return (
            <>
                <Books books={this.props.books}
                             isAuth={this.props.isAuth}
                             addToCart={this.props.addToCart}/>
            </>
        );
    }
}

const mstp = state => ({
    books: state.books.books,
    isAuth: state.auth.isAuth
})


export default connect(mstp, {
    getAsyncElements, addToCart
})(BooksContainer);