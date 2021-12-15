import React, {useState} from 'react';
import Filters from "./Filters.component";
import {useSelector} from "react-redux";

const FiltersContainer = (props) => {

    const isFiltersOpen = useSelector(state => state.filters.isFiltersOpen)
    // const filterPrice = useSelector(state => state.filters.price)
    // const filterPopularity = useSelector(state => state.filters.popularity)
    // const filterTime = useSelector(state => state.filters.time)
    //
    // const [price, setPrice] = useState(filterPrice)
    // const [popularity, setPopularity] = useState(filterPopularity)
    // const [time, setTime] = useState(filterTime)

    if (!isFiltersOpen) {
        console.log('inside if')
        console.log(isFiltersOpen)
        return null
    }

    return (
        <>
            <Filters/>
        </>
    );
};

export default FiltersContainer;