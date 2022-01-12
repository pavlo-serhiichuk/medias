import React from 'react';
import {Form, FilterWrap, Label, Wrapper, Select} from './NativeFilters.style'
import {FILTERS} from "../../utils/translations/translation";
import {SmallTitle} from "../common/Titles/Titles";
import {getTranslation} from "../../utils/translations/getTranslation";

const NativeFilters = (props) => {

    let {price, liked, time, setPrice, setPopularity, setTime, lang} = props

    return (
        <Wrapper>
            <SmallTitle filter="true">{getTranslation(FILTERS.TITLE, lang)}</SmallTitle>
            <FilterWrap>
                <Form>
                <Label>{getTranslation(FILTERS.PRICE.TITLE, lang)}:
                    <Select value={price} onChange={setPrice}>
                        <option value={price} disabled hidden>{price}</option>
                        <option value="expensive">{getTranslation(FILTERS.PRICE.EXPENSIVE, lang)}</option>
                        <option value="lower">{getTranslation(FILTERS.PRICE.LOWER, lang)}</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>{getTranslation(FILTERS.LIKED.TITLE, lang)}:
                    <Select value={liked} onChange={setPopularity}>
                        <option value={liked} disabled hidden>{liked}</option>
                        <option value="popular">{getTranslation(FILTERS.LIKED.POPULAR, lang)}</option>
                        <option value="unpopular">{getTranslation(FILTERS.LIKED.UNPOPULAR, lang)}</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>{getTranslation(FILTERS.TIME.TITLE, lang)}:
                    <Select value={time} onChange={setTime}>
                        <option value={time} disabled hidden>{time}</option>
                        <option value="in process...">{getTranslation(FILTERS.TIME.VALUE, lang)}</option>
                    </Select>
                </Label>
                </Form>
            </FilterWrap>
        </Wrapper>
    );
};

export default NativeFilters;