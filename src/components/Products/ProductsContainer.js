import React from 'react';
import Products from "./Products.component";
import {connect} from "react-redux";
import {
    getAsyncBooks,
    getAsyncCountries,
    getAsyncGuitars,
    getAsyncVouchers,
    getAsyncFilteredVouchers, setCurrentProduct
} from "../../redux/productsReducer";
import {addToCart} from "../../redux/cartReducer";
import Countries from "../Countries/Countries.component";
import {closeSidebar, openSidebar} from "../../redux/sidebarReducer";
import {openAlert, openMoreInfoModal} from "../../redux/modalReducer";
import {setAsyncWish} from "../../redux/wishesReducer";

class ProductsContainer extends React.PureComponent {

    tabTitle = title => document.title = `${title}| Medias`

    componentDidMount() {

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
                return this.props.getAsyncFilteredVouchers(this.props.countryID)
            default:
                return null
        }
    }

    addToCart = product => {
            this.props.isAuth
            ? this.props.addToCart(product)
            : alert('Please, sigh in first! Asshole!!')
    }

    openMoreInfo = productId => this.props.openMoreInfoModal(productId)

    setWish = (currentProduct, category, productId) => {
        this.props.setCurrentProduct(currentProduct)
        return this.props.setAsyncWish(this.props.userId, category, productId)
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
                && <b>{countryName[0].title} vouchers:</b>}

                <Products products={this.props.products}
                          addToCart={this.addToCart}
                          setWish={this.setWish}
                          category={this.props.category}
                          openMoreInfo={this.openMoreInfo}
                          isLoading={this.props.isLoading}
                />
            </>
        );
    }
}

const mstp = state => ({
    products: state.products.products,
    countries: state.products.countries,
    countryID: state.products.countryID,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    isLoading: state.auth.isLoading,
    category: state.products.category
})


export default connect(mstp, {
    getAsyncGuitars,
    getAsyncBooks,
    getAsyncVouchers,
    getAsyncCountries,
    getAsyncFilteredVouchers,
    openSidebar,
    closeSidebar,
    openMoreInfoModal,
    setAsyncWish,
    addToCart,
    setCurrentProduct,
    openAlert})(ProductsContainer);