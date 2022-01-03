import React, {useEffect} from 'react';
import {connect} from "react-redux";
import s from './Alert.module.css'
import {closeAlert} from "../../../redux/modalReducer";

const Alert = ({product, closeAlert}) => {

    useEffect(() => {
        setTimeout(() => closeAlert(), 2000)
    }, [])

    if (product) {
        return (
            <div className={s.alertWrap} style={{transition: 'all 3.2s ease-in'}}>

                <span>
                    You have added <strong>"{product.title}"</strong> to your Wishes!
                    Such a good choice:)
                </span>
            </div>
        );
    }

    return null
};

const mstp = state => ({
    product: state.products.currentProduct
})

export default connect(mstp, {closeAlert})(Alert);