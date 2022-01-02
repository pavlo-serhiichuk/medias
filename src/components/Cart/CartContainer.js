import React from 'react';
import {connect} from "react-redux";
import {closeSidebar} from "@Redux/sidebarReducer";
import { deleteFromCart } from "@Redux/cartReducer";
import Cart from "./Cart.component";

class CartContainer extends React.Component {

    componentDidMount() {
        document.title = 'Cart| Medias'
        this.props.closeSidebar()
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
    deleteFromCart, closeSidebar,
})(CartContainer);