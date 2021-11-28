import React from 'react';
import {Wrapper} from "./Countries.style";
import Country from "./Country/Country.component";

const Countries = ({countries}) => {
    return (
        <Wrapper>
            {countries.map(country => <Country country={country} key={country.id}/>)}
        </Wrapper>
    );
};

export default Countries;