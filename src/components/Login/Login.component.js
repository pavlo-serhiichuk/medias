import React from 'react';
import {Form, Input, Label, P} from "./Login.styles";

import Modal from "../common/ModalWrap/Modal.component";
import {PrimaryButton} from "../common/Buttons/Button.component";
import CloseButton from "../common/Buttons/CloseButton.component";
import {getTranslation} from "../../utils/translations/getTranslation";
import {AUTH} from "../../utils/translations/translation";


const Login = ({closeModal, sendData, register, handleSubmit, errors = {}, authError, lang}) => {
    console.log('________ ', {authError});

    return (
        <Modal>
            <CloseButton onClick={closeModal}/>
            <Form onSubmit={handleSubmit(sendData)}>
                {authError && authError.error}
                <br/>
                {errors.email && <P>! {errors.email.message}</P>}
                <Label>
                    <h6>Email: </h6>
                    <Input type='email' {...register('email', {required: true})}/>
                </Label>
                <br/>
                {errors.password && <P>! {errors.password.message}</P>}
                <Label>
                    <h6>Password: </h6>
                    <Input type='password' {...register('password', {required: true})}/>
                </Label>
                <br/>
                <PrimaryButton onClick={sendData}>Log in</PrimaryButton>
            </Form>
        </Modal>

    );
};

export default Login;