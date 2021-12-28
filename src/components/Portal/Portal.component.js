import React from 'react';
import {Form, Input, Messages, Submit, Title, Wrapper} from "./Portal.style";
import {AiOutlineSend, SiDialogflow} from "react-icons/all";

const Portal = () => {
    return (
        <Wrapper>
            <Title> <SiDialogflow/> Portal</Title>
            <Messages></Messages>
            <Form>
                <Input type="text"/>
                <Submit type="submit"><AiOutlineSend size={35}/></Submit>
            </Form>
        </Wrapper>
    );
};

export default Portal;