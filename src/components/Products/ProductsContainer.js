import React from 'react';
import Products from "./Products.component";
import {connect} from "react-redux";
import {
    getAsyncBooks,
    getAsyncCountries,
    getAsyncGuitars,
    getAsyncVouchers,
    getAsyncFilteredVouchers
} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";
import Countries from "../Countries/Countries.component";
import {openFilters} from "../../redux/filterReducer";

class ProductsContainer extends React.PureComponent {

    componentDidMount() {
        switch (this.props.category) {
            case 'books':
                document.title = 'Books| Medias'
                this.props.openFilters()

                return this.props.getAsyncBooks()
            case 'guitars':
                document.title = 'Guitars| Medias'
                return this.props.getAsyncGuitars()
            case 'vouchers':
                document.title = 'Vouchers| Medias'
                this.props.getAsyncVouchers()
                return this.props.getAsyncCountries()

            case 'filteredVouchers':
                document.title = 'Filtered Vouchers| Medias'
                this.props.getAsyncFilteredVouchers(this.props.countryID)
                return this.props.getAsyncCountries()

            default:
                return null
        }
    }

    render() {
        let countryName = null
        if (this.props.countries) {
            if (this.props.countryID) {
                countryName = this.props.countries.filter(country => country.id === this.props.countryID)
            }
        }


        return (
            <>
                {this.props.category === 'vouchers'
                && <Countries countries={this.props.countries}/>}
                {this.props.category === 'filteredVouchers'
                && <h5>{countryName[0].title} vouchers:</h5>}
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
    filteredProducts: state.filteredProducts,
    countries: state.products.countries,
    countryID: state.products.countryID,
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    category: state.products.category
})


export default connect(mstp, {
    getAsyncGuitars, getAsyncBooks,
    getAsyncVouchers, getAsyncCountries, getAsyncFilteredVouchers, openFilters,
    addToCart
})(ProductsContainer);