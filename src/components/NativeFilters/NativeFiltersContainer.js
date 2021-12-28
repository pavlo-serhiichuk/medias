import React, {useEffect, useState} from 'react';
import Filters from "./NativeFilters.component";
import {useDispatch, useSelector} from "react-redux";
import {
    getAsyncFilteredProducts,
    setFilterName, setFilterParam,
    setFilterPopularity,
    setFilterPrice,
    setFilterTime
} from "../../redux/sidebarReducer";

const NativeFiltersContainer = () => {
    const dispatch = useDispatch()

    let filterPrice = useSelector(state => state.sidebar.price)
    let filterPopularity = useSelector(state => state.sidebar.liked)
    let filterTime = useSelector(state => state.sidebar.time)

    let filterName = useSelector(state => state.sidebar.filterName)
    let filterParam = useSelector(state => state.sidebar.filterParam)
    let category = useSelector(state => state.products.category)

    let [price, setPrice] = useState(filterPrice)
    let [liked, setPopularity] = useState(filterPopularity)
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
        setFiltersData('liked', e.target.value)
    }

    let setNewTime = (e) => {
        dispatch(setFilterTime(e.target.value))
        setFiltersData('time', e.target.value)
    }


    useEffect(() => {
        setPrice(filterPrice)
        setPopularity(filterPopularity)
        setTime(filterTime)

        filterName && filterName !== 'time'
        && filterParam
        && dispatch(getAsyncFilteredProducts(category, {filterName: filterName, filterParam: filterParam}))
    })

    return (
        <>
            <Filters price={price}
                     time={time}
                     liked={liked}
                     setTime={setNewTime}
                     setPopularity={setNewPopularity}
                     setPrice={setNewPrice}/>
        </>
    );
};

const MemoizedNativeFiltersContainer = React.memo(NativeFiltersContainer)

export default MemoizedNativeFiltersContainer;