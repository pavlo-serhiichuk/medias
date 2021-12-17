import React, {useEffect, useState} from 'react';
import Filters from "./Filters.component";
import {useDispatch, useSelector} from "react-redux";
import {setFilterPopularity, setFilterPrice, setFilterTime} from "../../redux/filterReducer";

const FiltersContainer = (props) => {
    const dispatch = useDispatch()
    const isFiltersOpen = useSelector(state => state.filters.isFiltersOpen)
    const price = useSelector(state => state.filters.price)
    const popularity = useSelector(state => state.filters.popularity)
    const time = useSelector(state => state.filters.time)


    const setPrice = (e) => {
        console.log("Price: ", e.target.value)
        dispatch(setFilterPrice(e.target.value))
    }

    const setPopularity = (e) => {
        dispatch(setFilterPopularity(e.target.value))
    }

    const setTime = (e) => {
        dispatch(setFilterTime(e.target.value))
    }

    useEffect(() => {
        console.log('useEffect')
        document.title = 'Filtered| Medias'
    }, [])

    if (!isFiltersOpen) {
        console.log('inside if')
        console.log(isFiltersOpen)
        return null
    }

    return (
        <>
            <Filters price={price}
                     popularity={popularity}
                     time={time}
                     setTime={setTime}
                     setPopularity={setPopularity}
                     setPrice={setPrice}/>
        </>
    );
};

export default FiltersContainer;