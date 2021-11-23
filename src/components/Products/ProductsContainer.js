import React from 'react';
import Products from "./Products.component";
import {connect} from "react-redux";
import {getAsyncBooks, getAsyncGuitars} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";

class ProductsContainer extends React.Component {

    componentDidMount() {

        if (this.props.category === 'books') {
            document.title = 'Books| Medias'
            this.props.getAsyncBooks()
        } else if (this.props.category === 'guitars') {
            document.title = 'Guitars| Medias'
            this.props.getAsyncGuitars()
        }
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