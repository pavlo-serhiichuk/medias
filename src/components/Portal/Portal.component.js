import React from 'react';
import {AiOutlineSend as SendButton, SiDialogflow as PortalSign} from "react-icons/all";
import {Form, Input, Dialog, SubmitButton, Title, Wrapper, Avatar, Consultant, MessageWrap, Message} from "./Portal.style";

const Portal = () => {

    const messageArray = "How can I help you, Sapiens? I'm a big professional in different areas! Know everything about human nature. ".split(' ')
    const message = messageArray.map(el => <Message>{el}</Message>)

    return (
        <Wrapper>
            <Title><PortalSign/>Free support</Title>
            <Dialog>
                <Consultant>
                    <Avatar />
                    <MessageWrap>{message}</MessageWrap>
                </Consultant>
            </Dialog>
            <Form>
                <Input />
                <SubmitButton type="submit">
                    <SendButton size={35}/>
                </SubmitButton>
            </Form>
        </Wrapper>
    );
};

export default Portal;