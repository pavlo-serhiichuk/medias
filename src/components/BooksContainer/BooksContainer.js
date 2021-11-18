import React from 'react';
import Products from "../Products/Products.component";
import {connect} from "react-redux";
import {getAsyncBooks} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";

class BooksContainer extends React.Component {

    componentDidMount() {
        this.props.getAsyncBooks()
        document.title = 'Books| Medias'
    }
    render() {
        return (
            <>
                <Products products={this.props.books}
                             isAuth={this.props.isAuth}
                             addToCart={this.props.addToCart}/>
            </>
        );
    }
}

const mstp = state => ({
    books: state.products.books,
    isAuth: state.auth.isAuth
})


export default connect(mstp, {
    getAsyncBooks, addToCart
})(BooksContainer);