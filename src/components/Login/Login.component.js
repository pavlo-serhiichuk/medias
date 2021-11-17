import React from 'react';
import {Form, Input, Label, P} from "./Login.styles";

import Modal from "../../common/ModalWrap/Modal.component";
import Button from "../../common/Buttons/Button.component";
import CloseButton from "../../common/Buttons/CloseButton.component";


const Login = ({closeModal, sendData, register, handleSubmit, errors}) => {
    return (
        <Modal>
            <CloseButton onClick={closeModal}/>
            <Form onSubmit={handleSubmit(sendData)}>
                <h5>Enter your data, sir:</h5>
                <Label>
                    <h6>Username: </h6>
                    <Input type={'text'}
                           defaultValue="p@p.p"
                           {...register('email', {required: true})}/>
                </Label>
                {errors.email && <P>! {errors.email.message}</P>}
                <Label>
                    <h6>Password:</h6>
                    <Input type={'password'}
                           defaultValue="pasha_s"
                           {...register('password', {required: true})}/>
                </Label>
                {errors.password && <P>! {errors.password.message}</P>}

                <Button onClick={sendData}>Log in</Button>
            </Form>
        </Modal>

    );
};

export default Login;