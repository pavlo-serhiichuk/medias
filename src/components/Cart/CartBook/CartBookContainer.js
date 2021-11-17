import React from 'react';
import CartBook from "./CartBook.component";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";


const CartBookContainer = (props) => {

    const schema = yup.object().shape({
        amount: yup.number().required(),
    });


    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch()
    const isLoginModalOpen = useSelector(state => state.modal.isLoginModalOpen)
    const isAuth = useSelector(state => state.auth.isAuth)
    const data = watch()

    return (
        <>
            <CartBook {...props} register={register} handleSubmit={handleSubmit}/>
        </>
    );
};

export default CartBookContainer;