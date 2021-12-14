import React, {useState} from 'react';
import {Form, FilterWrap, Label, Wrapper, Select} from './Filters.style'
import {SmallTitle} from "../../common/Titles/Titles";

const Filters = (props) => {

    const [price, setPrice] = useState("default")
    const [popularity, setPopularity] = useState("default")
    const [time, setTime] = useState("default")

    return (
        <Wrapper>
            <SmallTitle filter>Filter on:</SmallTitle>
            <FilterWrap>
                <Form>
                <Label>price:
                    <Select value={price} onChange={() => {}} placeholder="Select...">
                        <option value="default" disabled hidden>....</option>
                        <option value="expensive">expensive first</option>
                        <option value="bottom">lower first</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>popularity:
                    <Select value={popularity} onChange={() => {}} placeholder="Select...">
                        <option value="default" disabled hidden>....</option>
                        <option value="popular">popular</option>
                        <option value="unpopular">unpopular</option>
                    </Select>
                </Label>
                </Form>
                <Form>
                <Label>time:
                    <Select value={time} onChange={() => {}} placeholder="Select...">
                        <option value="default" disabled hidden>....</option>
                        <option value="newer">Working on it</option>
                    </Select>
                </Label>
                </Form>
            </FilterWrap>
        </Wrapper>
    );
};

export default Filters;