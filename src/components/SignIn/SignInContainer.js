import React, {useEffect} from 'react';
import {closeSignInModal} from "../../redux/modalReducer";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {fetchSignIn} from "../../redux/authReducer";
import SignIn from "./SighIn.component";

const SignInContainer = () => {

    const dispatch = useDispatch()
    const closeModal = () => dispatch(closeSignInModal())
    const lang = useSelector(state => state.lang.language)
    const isSignInModalOpen = useSelector(state => state.modal.isSignInModalOpen)
    const {register, handleSubmit, watch, formState: {errors}} = useForm();

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
                    lang={lang}
                    register={register}
                    handleSubmit={handleSubmit}/>
        </div>
    );
};

export default SignInContainer;