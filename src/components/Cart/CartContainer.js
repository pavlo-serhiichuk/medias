import React from 'react';
import {connect} from "react-redux";
import Cart from "./Cart.component";
import {hideSidebar} from "../../redux/sidebarReducer";
import { deleteFromCart } from "../../redux/cartReducer";

class CartContainer extends React.Component {

    componentDidMount() {
        document.title = 'Cart| Medias'
        this.props.hideSidebar()
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
    isAuth: state.auth.isAuth,
    lang: state.lang.language
})


export default connect(mstp, {
    deleteFromCart, hideSidebar,
})(CartContainer);