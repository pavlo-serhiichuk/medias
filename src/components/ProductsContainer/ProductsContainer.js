import React from 'react';
import Products from "../Products/Products.component";
import {connect} from "react-redux";
import {getAsyncBooks, getAsyncGuitars} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";

class ProductsContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.category);
        this.props.category === 'books' && this.props.getAsyncBooks()
        this.props.category === 'guitars' && this.props.getAsyncGuitars()

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
    category: state.products.category
})


export default connect(mstp, {
    getAsyncGuitars, getAsyncBooks, addToCart
})(ProductsContainer);