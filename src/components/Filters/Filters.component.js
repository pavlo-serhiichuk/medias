import React, {useState} from 'react';
import {Form, FilterWrap, Label, Wrapper, Select, FilterTitle} from './Filters.style'

const Filters = (props) => {

    return (
        <Wrapper>
            <FilterTitle filter="true">Filter on:</FilterTitle>
            <FilterWrap>
                <Form>
                <Label>price:
                    <Select value={props.price} onChange={props.setPrice}>
                        <option value={props.price} disabled hidden>{props.price}</option>
                        <option value="expensive">expensive first</option>
                        <option value="lower">lower first</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>popularity:
                    <Select value={props.popularity} onChange={props.setPopularity}>
                        <option value={props.popularity} disabled hidden>{props.popularity}</option>
                        <option value="popular">popular</option>
                        <option value="unpopular">unpopular</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>time:
                    <Select value={props.time} onChange={props.setTime}>
                        <option value={props.time} disabled hidden>{props.time}</option>
                        <option value="newer">Working on it</option>
                    </Select>
                </Label>
                </Form>
            </FilterWrap>
        </Wrapper>
    );
};

export default Filters;