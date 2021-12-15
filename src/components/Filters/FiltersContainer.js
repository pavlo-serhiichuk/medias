import React, {useEffect, useState} from 'react';
import Filters from "./Filters.component";
import {useDispatch, useSelector} from "react-redux";
import {setFilterPopularity, setFilterPrice, setFilterTime} from "../../redux/filterReducer";

const FiltersContainer = (props) => {
    const dispatch = useDispatch()
    const isFiltersOpen = useSelector(state => state.filters.isFiltersOpen)
    const filterPrice = useSelector(state => state.filters.price)
    const filterPopularity = useSelector(state => state.filters.popularity)
    const filterTime = useSelector(state => state.filters.time)

    const [price, setPrice] = useState(filterPrice)
    const [popularity, setPopularity] = useState(filterPopularity)
    const [time, setTime] = useState(filterTime)

    const setNewPrice = (e) => {
        dispatch(setFilterPrice(e.target.value))
        setPrice(filterPrice)
    }

    const setNewPopularity = (e) => {
        dispatch(setFilterPopularity(e.target.value))
        setPopularity(filterPopularity)
    }

    const setNewTime = (e) => {
        dispatch(setFilterTime(e.target.value))
        setTime(filterTime)
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
                     time={time}
                     popularity={popularity}
                     setTime={setNewTime}
                     setPopularity={setNewPopularity}
                     setPrice={setNewPrice}/>
        </>
    );
};

export default FiltersContainer;