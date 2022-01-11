import React from 'react';
import {Form, Input, Label} from "./SignIn.styles";
import Button from "../common/Buttons/Button.component";
import CloseButton from "../common/Buttons/CloseButton.component";
import Modal from "../common/ModalWrap/Modal.component";
import {getTranslation} from "../../utils/translations/getTranslation";
import {AUTH} from "../../utils/translations/translation";

const SighIn = ({closeModal, sendData, register, handleSubmit}) => {
    return (
        <Modal>
                <CloseButton onClick={closeModal}/>
                <Form onSubmit={handleSubmit(sendData)}>
                    <h5>{getTranslation(AUTH.MODAL.TITLE)}:</h5>
                    <Label>
                        <h6>{getTranslation(AUTH.MODAL.USERNAME)}: </h6>
                        <Input type={'text'}
                               defaultValue="pasha_s"
                               {...register('username', { required: true })}/>
                    </Label>
                    <Label>
                        <h6>{getTranslation(AUTH.MODAL.PASSWORD)}:</h6>
                        <Input type={'password'}
                               defaultValue="pasha_s"
                               {...register('password', { required: true })}/>
                    </Label>
                    <Label>
                        <h6>{getTranslation(AUTH.MODAL.EMAIL)}:</h6>
                        <Input type={'email'}
                               defaultValue="p@p.p"
                               {...register('email', { required: true })}/>
                    </Label>
                    <Label>
                        <h6>{getTranslation(AUTH.MODAL.PHONE)}:</h6>
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