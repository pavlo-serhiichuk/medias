import React, {useEffect, useState} from 'react';
import {Form, FilterWrap, Label, Wrapper, Select, FilterTitle} from './NativeFilters.style'
import {useDispatch, useSelector} from "react-redux";
import {setFilterPopularity, setFilterPrice, setFilterTime} from "../../redux/filterReducer";

const NativeFilters = (props) => {

    let {price, liked, time, setPrice, setPopularity, setTime} = props

    return (
        <Wrapper>
            <FilterTitle filter="true">Filter on:</FilterTitle>
            <FilterWrap>
                <Form>
                <Label>price:
                    <Select value={price} onChange={setPrice}>
                        <option value={price} disabled hidden>{price}</option>
                        <option value="expensive">expensive first</option>
                        <option value="lower">lower first</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>liked:
                    <Select value={liked} onChange={setPopularity}>
                        <option value={liked} disabled hidden>{liked}</option>
                        <option value="popular">popular</option>
                        <option value="unpopular">unpopular</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>time:
                    <Select value={time} onChange={setTime}>
                        <option value={time} disabled hidden>{time}</option>
                        <option value="in process...">Working on it</option>
                    </Select>
                </Label>
                </Form>
            </FilterWrap>
        </Wrapper>
    );
};

export default NativeFilters;