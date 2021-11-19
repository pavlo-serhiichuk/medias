import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart.component";
import { deleteFromCart } from "../../redux/cartReducer";

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
    cartProducts: state.cart.cartProducts,
    isAuth: state.auth.isAuth
})


export default connect(mstp, {
    deleteFromCart
})(CartContainer);