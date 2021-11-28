import React from 'react';
import {Wrapper} from "./Country.style";
import {SmallTitle} from "../../../common/Titles/Titles";
import {Img} from "../../../common/Imgs/Imgs";
import {useDispatch} from "react-redux";

const Country = ({country}) => {
    // const getFilteredVouchers = useDispatch()

    return (
        <Wrapper>
            <Img image={country.image} country/>
            <SmallTitle>{country.title}</SmallTitle>
        </Wrapper>
    );
};

export default Country;