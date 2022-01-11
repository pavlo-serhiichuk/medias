import React from 'react';
import {Form, FilterWrap, Label, Wrapper, Select} from './NativeFilters.style'
import {SmallTitle} from "../common/Titles/Titles";
import {getTranslation} from "../../utils/translations/getTranslation";
import {CATEGORIES, FILTERS} from "../../utils/translations/translation";

const NativeFilters = (props) => {

    let {price, liked, time, setPrice, setPopularity, setTime} = props

    return (
        <Wrapper>
            <SmallTitle filter="true">{getTranslation(FILTERS.TITLE)}</SmallTitle>
            <FilterWrap>
                <Form>
                <Label>{getTranslation(FILTERS.PRICE.TITLE)}:
                    <Select value={price} onChange={setPrice}>
                        <option value={price} disabled hidden>{price}</option>
                        <option value="expensive">{getTranslation(FILTERS.PRICE.EXPENSIVE)}</option>
                        <option value="lower">{getTranslation(FILTERS.PRICE.LOWER)}</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>{getTranslation(FILTERS.LIKED.TITLE)}:
                    <Select value={liked} onChange={setPopularity}>
                        <option value={liked} disabled hidden>{liked}</option>
                        <option value="popular">{getTranslation(FILTERS.LIKED.POPULAR)}</option>
                        <option value="unpopular">{getTranslation(FILTERS.LIKED.UNPOPULAR)}</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>{getTranslation(FILTERS.TIME.TITLE)}:
                    <Select value={time} onChange={setTime}>
                        <option value={time} disabled hidden>{time}</option>
                        <option value="in process...">{getTranslation(FILTERS.TIME.VALUE)}</option>
                    </Select>
                </Label>
                </Form>
            </FilterWrap>
        </Wrapper>
    );
};

export default NativeFilters;