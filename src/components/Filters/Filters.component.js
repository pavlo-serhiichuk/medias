import React, {useState} from 'react';
import {FilterForm, FilterWrap, Label, Wrapper} from './Filters.style'
import {SmallTitle} from "../../common/Titles/Titles";

const Filters = (props) => {

    const [price, setPrice] = useState("top")

    return (
        <Wrapper>
            <SmallTitle>Filter on</SmallTitle>
            <FilterWrap>
                <FilterForm>
                <Label>price:
                    <select value={price} onChange={() => {}}>
                        <option value="top">from the top</option>
                        <option value="bottom">from the bottom</option>
                    </select>
                </Label>
                </FilterForm>
            </FilterWrap>
        </Wrapper>
    );
};

export default Filters;