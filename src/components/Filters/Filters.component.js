import React from 'react';
import Select from 'react-select';
import {FilterTitle, FilterWrap, Label, Wrapper} from "./Filters.style";
import {setFilterPrice} from "../../redux/filterReducer";



const Filters = (props) => {

    const price = [
        {value: 'expensive', label: 'expensive first'},
        {value: 'cheap', label: 'cheap first'},
    ]
    const liked = [
        {value: 'popular', label: 'Most popular'},
        {value: 'unpopular', label: 'Less popular'},
    ]
    const time = [
        {value: 'inProcess', label: 'Working on it...'},
    ]

    return (
        <Wrapper>
            <FilterTitle>Filter on</FilterTitle>
            <FilterWrap>
                <Label>price:</Label>
                <Select options={price} disabled onChange={(e) => setFilterPrice(e.value)}/>
            </FilterWrap>
            <FilterWrap>
                <Label>liked:</Label>
                <Select options={liked} onChange={props.setPopularity}/>
            </FilterWrap>
            <FilterWrap>
                <Label>time:</Label>
                <Select options={time} onChange={props.setTime}/>
            </FilterWrap>
        </Wrapper>
    )
}


export default Filters