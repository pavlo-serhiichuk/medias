import React from 'react';
import Products from "../Products/Products.component";
import {connect} from "react-redux";
import {getAsyncGuitars} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";

class GuitarsContainer extends React.Component {

    componentDidMount() {
        this.props.getAsyncGuitars()
        document.title = 'Guitars| Medias'
    }
    render() {
        return (
            <>
                <Products products={this.props.products}
                          isAuth={this.props.isAuth}
                          isFetching={this.props.isFetching}
                          addToCart={this.props.addToCart}/>
            </>
        );
    }
}

const mstp = state => ({
    products: state.products.products,
    isAuth: state.auth.isAuth,
    isFetching: state.auth.isFetching,
})


export default connect(mstp, {
    getAsyncGuitars, addToCart
})(GuitarsContainer);