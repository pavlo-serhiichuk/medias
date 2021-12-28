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
import {closeSidebar, openSidebar} from "../../redux/sidebarReducer";

class ProductsContainer extends React.PureComponent {

    tabTitle = title => document.title = `${title}| Medias`

        componentDidMount() {
        this.props.openSidebar()

        switch (this.props.category) {
            case 'books':
                this.tabTitle('Books')
                return this.props.getAsyncBooks()
            case 'guitars':
                this.tabTitle('Guitars')
                return this.props.getAsyncGuitars()
            case 'vouchers':
                this.tabTitle('Vouchers')
                this.props.getAsyncVouchers()
                return this.props.getAsyncCountries()
            case 'filteredVouchers':
                this.tabTitle('Filtered Vouchers')
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
    getAsyncVouchers, getAsyncCountries, getAsyncFilteredVouchers, openSidebar, closeSidebar,
    addToCart
})(ProductsContainer);