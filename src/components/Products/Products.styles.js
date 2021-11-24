import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2px;
   
         @media screen and (max-width: 992px) {
           grid-template-columns: repeat(3, 1fr);
         }

           @media screen and (max-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        }

     @media screen and (max-width: 576px) {
            grid-template-columns: 1fr 1fr;

        }

`
export default Wrapper;