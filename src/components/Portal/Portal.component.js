import React from 'react';
import {Form, Input, Dialog, Submit, Title, Wrapper, Avatar, Consultant, MessageWrap, Message} from "./Portal.style";
import {AiOutlineSend, SiDialogflow} from "react-icons/all";

const Portal = () => {

    const messageArray = "How can I help you, Sapiens? I'm a big professional in different areas! Know everything about human nature. ".split(' ')
    const message = messageArray.map(el => <Message>{el}</Message>)
    console.log()
    return (
        <Wrapper>
            <Title> <SiDialogflow/>Free support</Title>
            <Dialog>
                <Consultant>
                    <Avatar />
                    <MessageWrap>{message}</MessageWrap>
                </Consultant>
            </Dialog>
            <Form>
                <Input type="text"/>
                <Submit type="submit"><AiOutlineSend size={35}/></Submit>
            </Form>
        </Wrapper>
    );
};

export default Portal;