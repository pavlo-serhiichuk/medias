import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart.component";
import { deleteFromCart } from "../../redux/booksReducer";

class CartContainer extends React.Component {

    componentDidMount() {
        document.title = 'Cart| Medias'
    }

    render() {
        return (
            <>
                <Cart {...this.props}/>
            </>
        );
    }
}

const mstp = state => ({
    cartBooks: state.books.cartBooks
})


export default connect(mstp, {
    deleteFromCart
})(CartContainer);