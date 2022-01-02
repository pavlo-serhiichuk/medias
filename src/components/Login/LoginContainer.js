import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {fetchLogin} from "@Redux/authReducer";
import {closeLoginModal} from "@Redux/modalReducer";
import Login from "./Login.component";

const LoginContainer = () => {
    const schema = yup.object().shape({
        username: yup.string().max(15).required(),
        password: yup.string().min(3).max(15).required(),
    });

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch()
    const isLoginModalOpen = useSelector(state => state.modal.isLoginModalOpen)

    const sendData = () => {
        const data = watch()
        dispatch(fetchLogin({email: data.email, password: data.password}))
    }

    const closeModal = () => dispatch(closeLoginModal())

    useEffect(() => {
        document.querySelector('[data-close]').addEventListener('click', event => {
            return event.target.dataset.close
                ? dispatch(closeLoginModal())
                : null
        });
    }, [isLoginModalOpen])

    return (
        <>
            <Login closeModal={closeModal}
                   sendData={sendData}
                   errors={errors}
                   register={register}
                   handleSubmit={handleSubmit}/>
        </>
    );
};

export default LoginContainer;