import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart.component";
import { deleteFromCart } from "../../redux/cartReducer";
import {closeFilters} from "../../redux/filterReducer";

class CartContainer extends React.Component {

    componentDidMount() {
        document.title = 'Cart| Medias'
        console.log('this.props.closeFilters()')
        this.props.closeFilters()
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
    deleteFromCart, closeFilters,
})(CartContainer);