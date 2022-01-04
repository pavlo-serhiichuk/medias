import React from 'react';
import {Form, Input, Dialog, SubmitButton, Title, Wrapper, Avatar, Consultant, MessageWrap, Message} from "./Portal.style";
import {AiOutlineSend as SendButton, SiDialogflow as PortalSign} from "react-icons/all";

const Portal = () => {

    const messageArray = "How can I help you, Sapiens? I'm a big professional in different areas! Know everything about human nature. ".split(' ')
    const message = messageArray.map((el, i) => <Message key={i}>{el}</Message>)

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