import React, {useEffect} from 'react';
import {closeLoginModal} from "../../redux/modalReducer";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchLogin} from "../../redux/authReducer";
import Login from "./Login.component";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

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
    const lang = useSelector(state => state.lang.language)

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
                   lang={lang}
                   errors={errors}
                   register={register}
                   handleSubmit={handleSubmit}/>
        </>
    );
};

export default LoginContainer;