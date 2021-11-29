import React from 'react';
import {Wrapper} from "./Country.style";
import {SmallTitle} from "../../../common/Titles/Titles";
import {Img} from "../../../common/Imgs/Imgs";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
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
            <Img onClick={() => console.log(country.id)} image={country.image} country/>
            <SmallTitle>
                <Link to={`/filtered?id=${country.id}`}
                      onClick={toggleCategory}>
                    {country.title}
                </Link>
            </SmallTitle>
        </Wrapper>
    );
};

export default Country;