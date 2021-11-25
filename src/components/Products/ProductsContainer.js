import React from 'react';
import Products from "./Products.component";
import {connect} from "react-redux";
import {getAsyncBooks, getAsyncGuitars, getAsyncTraveling} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";

class ProductsContainer extends React.Component {

    componentDidMount() {
        switch(this.props.category) {
            case 'books':
                document.title = 'Books| Medias'
                return this.props.getAsyncBooks()
            case 'guitars':
                document.title = 'Guitars| Medias'
                return this.props.getAsyncGuitars()
            case 'traveling':
                document.title = 'Traveling| Medias'
                return this.props.getAsyncTraveling()
            default:
                return null
        }
    }

    render() {
        return (
            <>
                <Products products={this.props.products}
                          isAuth={this.props.isAuth}
                          isLoading={this.props.isLoading}
                          addToCart={this.props.addToCart}/>
            </>
        );
    }
}

const mstp = state => ({
    products: state.products.products,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    category: state.products.category
})


export default connect(mstp, {
    getAsyncGuitars, getAsyncBooks, getAsyncTraveling, addToCart
})(ProductsContainer);