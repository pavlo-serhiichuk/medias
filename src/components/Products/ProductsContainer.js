import React from 'react';
import Products from "./Products.component";
import {connect} from "react-redux";
import {getAsyncBooks, getAsyncCountries, getAsyncGuitars, getAsyncVouchers} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";
import {CountriesContainer, Wrapper} from "./Products.styles";
import Countries from "../Countries/Countries.component";
import {fetchLogin} from "../../redux/authReducer";

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
                this.props.getAsyncVouchers()
                return this.props.getAsyncCountries()
            default:
                return null
        }
    }

    render() {
        return (
            <>
                {this.props.category === 'traveling' && <Countries countries={this.props.countries} />}
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
    countries: state.products.countries,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    category: state.products.category
})


export default connect(mstp, {
    getAsyncGuitars, getAsyncBooks,
    getAsyncVouchers, getAsyncCountries,
    addToCart
})(ProductsContainer);