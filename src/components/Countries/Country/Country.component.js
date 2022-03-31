import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Wrapper} from "./Country.style";
import {Img} from "../../common/Imgs/Imgs";
import {SmallTitle} from "../../common/Titles/Titles";
import {changeCategory, changeCountryID} from "../../../redux/productsReducer";
import {NavLink} from "react-router-dom";

const Country = ({country}) => {

    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)

    const toggleCategory = () => {
        dispatch(changeCountryID(country.id))
        category
        !== 'filteredVouchers'
        && dispatch(changeCategory('filteredVouchers'))
    }

    return (
        <Wrapper>
            <NavLink to={`/vouchers/filtered/${country.id}`} onClick={toggleCategory}>
                <Img image={country.image} country/>
                <SmallTitle>
                    {country.title}
                </SmallTitle>
            </NavLink>
        </Wrapper>
    );
};

export default Country;