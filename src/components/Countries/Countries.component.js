import React from 'react';
import {Wrapper} from "./Countries.style";
import Country from "./Country/Country.component";
import {useLocation} from "react-router-dom";

const Countries = ({countries}) => {
    const location = useLocation()

    return (
        <>
            {
                location.pathname.slice(1) === 'vouchers'
                    ? <Wrapper>
                        {countries.map(country => <Country country={country} key={country.id}/>)}
                    </Wrapper>
                    : null
            }
        </>
    );
};


export default Countries;