import React, {useEffect} from 'react';
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
import {hideSidebar, openSidebar} from "../../redux/sidebarReducer";
import {openAlert, openMoreInfoModal} from "../../redux/modalReducer";
import {setAsyncWish} from "../../redux/wishesReducer";

const ProductsContainer = (props) => {

    const tabTitle = title => document.title = `${title}| Medias`

    useEffect(() => {

        switch (props.category) {
            case 'books':
                tabTitle('Books')
                return props.getAsyncBooks()
            case 'guitars':
                tabTitle('Guitars')
                return props.getAsyncGuitars()
            case 'vouchers':
                tabTitle('Vouchers')
                props.getAsyncVouchers()
                return props.getAsyncCountries()
            case 'filteredVouchers':
                tabTitle('Filtered Vouchers')
                return props.getAsyncFilteredVouchers(props.countryID)
            default:
                return null
        }
    }, [])

    const addToCart = product => {
        props.isAuth
            ? props.addToCart(product)
            : alert('Please, sigh in first! Asshole!!')
    }

    const openMoreInfo = productId => props.openMoreInfoModal(productId)

    const setWish = (currentProduct, category, productId) => {
        props.setCurrentProduct(currentProduct)
        return props.setAsyncWish(props.userId, category, productId)
    }


    let countryName = null

    if (props.countries) {
        if (props.countryID) {
            countryName = props.countries.filter(country => country.id === props.countryID)
        }
    }

    return (
        <>
            {props.category === 'vouchers'
                && <Countries countries={props.countries}/>}
            {props.category === 'filteredVouchers'
                && <b>{countryName[0].title} vouchers:</b>}

            <Products
                isLoading={props.isLoading}
                products={props.products}
                category={props.category}
                lang={props.lang}
                openMoreInfo={openMoreInfo}
                addToCart={addToCart}
                setWish={setWish}
            />
        </>
    );
}

const mstp = state => ({
    products: state.products.products,
    countries: state.products.countries,
    countryID: state.products.countryID,
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    isLoading: state.auth.isLoading,
    category: state.products.category,
    lang: state.lang.language
})


export default connect(mstp, {
    getAsyncGuitars,
    getAsyncBooks,
    getAsyncVouchers,
    getAsyncCountries,
    getAsyncFilteredVouchers,
    openSidebar,
    hideSidebar,
    openMoreInfoModal,
    setAsyncWish,
    addToCart,
    setCurrentProduct,
    openAlert
})(ProductsContainer);