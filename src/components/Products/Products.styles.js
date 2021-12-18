import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 5px;
`

export const ProductsContainer = styled.div`
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 10px 0 0 0;
    
    // display: grid;
    // grid-template-columns: repeat(4, 1fr);
    // grid-gap: 2px;
    
     // @media screen and (max-width: 992px) {
     //       grid-template-columns: repeat(3, 1fr);
     // }
     //
     // @media screen and (max-width: 768px) {
     //        grid-template-columns: repeat(3, 1fr);
     // }
     //
     // @media screen and (max-width: 576px) {
     //        grid-template-columns: 1fr 1fr;
     //
     //  }
`

export const CountriesContainer = styled.div`

`