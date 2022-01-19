import React from 'react';
import {Wrapper, Content, Strong, SocialMedias} from "./Footer.style";
import {
    FaFacebookSquare as Facebook,
    FaYoutubeSquare as Youtube,
    FaInstagramSquare as Instagram
} from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <span>
                    Be in touch always with <Strong>medias. </Strong>
                </span>
                <span>
                    Find your Books, Guitars, Vouchers in <Strong>medias.</Strong>
                </span>
                <SocialMedias>
                    <span>Try to find Us in:</span>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={30}/></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><Youtube size={30}/></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={30}/></a>
                </SocialMedias>
            </Content>
        </Wrapper>
    );
};

export default Footer;