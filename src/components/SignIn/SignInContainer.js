import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignIn} from "@Redux/authReducer";
import {closeSignInModal} from "@Redux/modalReducer";
import SignIn from "./SighIn.component";

const SignInContainer = () => {

    const dispatch = useDispatch()
    const isSignInModalOpen = useSelector(state => state.modal.isSignInModalOpen)
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const closeModal = () => dispatch(closeSignInModal())

    const sendData = () => {
        const data = watch()
        dispatch(fetchSignIn({username: data.username, password: data.password, email: data.email, tel: data.tel}))
    }

    useEffect(() => {
        document.querySelector('[data-close]').addEventListener('click', event => {
           return event.target.dataset.close
                ? dispatch(closeSignInModal())
                : null
        });
    }, [isSignInModalOpen])

    return (
        <div>
            <SignIn closeModal={closeModal}
                    sendData={sendData}
                    register={register}
                    handleSubmit={handleSubmit}/>
        </div>
    );
};

export default SignInContainer;