import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Wrapper} from "./Country.style";
import {Img} from "../../common/Imgs/Imgs";
import {SmallTitle} from "../../common/Titles/Titles";
import {changeCategory, changeCountryID} from "../../../redux/productsReducer";

const Country = ({country}) => {

    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)

    const toggleCategory = () => {
        dispatch(changeCountryID(country.id))
        category !== 'filteredVouchers' && dispatch(changeCategory('filteredVouchers'))
    }

    return (
        <Wrapper>
            <Link to={`/vouchers/filtered?id=${country.id}`} onClick={toggleCategory}>
                <Img image={country.image} country/>
                <SmallTitle>
                    {country.title}
                </SmallTitle>
            </Link>
        </Wrapper>
    );
};

export default Country;