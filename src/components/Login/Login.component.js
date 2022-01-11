import React from 'react';
import {Form, Input, Label, P} from "./Login.styles";

import Modal from "../common/ModalWrap/Modal.component";
import Button, {PrimaryButton} from "../common/Buttons/Button.component";
import CloseButton from "../common/Buttons/CloseButton.component";
import {getTranslation} from "../../utils/translations/getTranslation";
import {AUTH} from "../../utils/translations/translation";


const Login = ({closeModal, sendData, register, handleSubmit, errors}) => {
    return (
        <Modal>
            <CloseButton onClick={closeModal}/>
            <Form onSubmit={handleSubmit(sendData)}>
                <h5>{getTranslation(AUTH.MODAL.TITLE)}:</h5>
                <Label>
                    <h6>{getTranslation(AUTH.MODAL.USERNAME)}: </h6>
                    <Input type={'text'}
                           defaultValue="p@p.p"
                           {...register('email', {required: true})}/>
                </Label>
                {errors.email && <P>! {errors.email.message}</P>}
                <Label>
                    <h6>{getTranslation(AUTH.MODAL.PASSWORD)}:</h6>
                    <Input type={'password'}
                           defaultValue="pasha_s"
                           {...register('password', {required: true})}/>
                </Label>
                {errors.password && <P>! {errors.password.message}</P>}

                <PrimaryButton onClick={sendData}>Log in</PrimaryButton>
            </Form>
        </Modal>

    );
};

export default Login;