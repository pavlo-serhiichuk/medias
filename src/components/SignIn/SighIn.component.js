import React from 'react';
import {Form, Input, Label} from "./SignIn.styles";
import Button from "../common/Buttons/Button.component";
import CloseButton from "../common/Buttons/CloseButton.component";
import Modal from "../common/ModalWrap/Modal.component";

const SighIn = ({closeModal, sendData, register, handleSubmit}) => {
    return (
        <Modal>
                <CloseButton onClick={closeModal}/>
                <Form onSubmit={handleSubmit(sendData)}>
                    <h5>Enter your data, sir:</h5>
                    <Label>
                        <h6>Username: </h6>
                        <Input type={'text'}
                               defaultValue="pasha_s"
                               {...register('username', { required: true })}/>
                    </Label>
                    <Label>
                        <h6>Password:</h6>
                        <Input type={'password'}
                               defaultValue="pasha_s"
                               {...register('password', { required: true })}/>
                    </Label>
                    <Label>
                        <h6>e-mail:</h6>
                        <Input type={'email'}
                               defaultValue="p@p.p"
                               {...register('email', { required: true })}/>
                    </Label>
                    <Label>
                        <h6>Phone number:</h6>
                        <Input type={'tel'}
                               defaultValue="+380976804609"
                               {...register('tel', { required: true })}/>
                    </Label>
                    <Button onClick={() => sendData}>Sign in</Button>
                </Form>
        </Modal>

    );
};

export default SighIn;