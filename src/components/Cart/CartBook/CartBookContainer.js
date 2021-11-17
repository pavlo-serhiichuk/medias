import React from 'react';
import CartBook from "./CartBook.component";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {decrementAmount, incrementAmount} from "../../../redux/booksReducer";


const CartBookContainer = (props) => {

    // const schema = yup.object().shape({
    //     amount: yup.number().required(),
    // });
    //
    // const {register, handleSubmit, watch, formState: {errors}} = useForm({
    //     resolver: yupResolver(schema)
    // });

    const dispatch = useDispatch()
    const increment = (bookID) => dispatch(incrementAmount(bookID))
    const decrement = (bookID) => dispatch(decrementAmount(bookID))


    return (
        <>
            <CartBook {...props}
                      // register={register}
                      // handleSubmit={handleSubmit}
                      increment={increment}
                      decrement={decrement}/>
        </>
    );
};

export default CartBookContainer;