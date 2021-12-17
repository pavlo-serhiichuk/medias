import React, {useEffect, useState} from 'react';
import Filters from "./NativeFilters.component";
import {useDispatch, useSelector} from "react-redux";
import {
    getAsyncFilteredProducts,
    setFilterName, setFilterParam,
    setFilterPopularity,
    setFilterPrice,
    setFilterTime
} from "../../redux/filterReducer";

const NativeFiltersContainer = () => {

    const dispatch = useDispatch()

    let isFiltersOpen = useSelector(state => state.filters.isFiltersOpen)
    let filterPrice = useSelector(state => state.filters.price)
    let filterPopularity = useSelector(state => state.filters.popularity)
    let filterTime = useSelector(state => state.filters.time)

    let filterName = useSelector(state => state.filters.filterName)
    let filterParam = useSelector(state => state.filters.filterParam)
    let category = useSelector(state => state.products.category)


    let [price, setPrice] = useState(filterPrice)
    let [popularity, setPopularity] = useState(filterPopularity)
    let [time, setTime] = useState(filterTime)

    let setFiltersData = (filterName, filterParam) => {
        dispatch(setFilterName(filterName))
        dispatch(setFilterParam(filterParam))
    }

    let setNewPrice = (e) => {
        dispatch(setFilterPrice(e.target.value))
        setFiltersData('price', e.target.value)
    }

    let setNewPopularity = (e) => {
        dispatch(setFilterPopularity(e.target.value))
        setFiltersData('popularity', e.target.value)
    }

    let setNewTime = (e) => {
        dispatch(setFilterTime(e.target.value))
        setFiltersData('time', e.target.value)
    }


    useEffect(() => {
        setPrice(filterPrice)
        setPopularity(filterPopularity)
        setTime(filterTime)

        filterName
        && filterParam
        && dispatch(getAsyncFilteredProducts(category, {filterName: filterName, filterParam: filterParam}))
    })

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

export default NativeFiltersContainer;