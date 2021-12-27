import React, {useEffect, useState} from 'react';
import Filters from "./Filters.component";
import {useDispatch, useSelector} from "react-redux";
import {setFilterPopularity, setFilterPrice, setFilterTime} from "../../redux/sidebarReducer";

const FiltersContainer = (props) => {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen)
    const price = useSelector(state => state.sidebar.price)
    const liked = useSelector(state => state.sidebar.liked)
    const time = useSelector(state => state.sidebar.time)


    const setPrice = (e) => {
        dispatch(setFilterPrice(e.target.value))
    }

    const setPopularity = (e) => {
        dispatch(setFilterPopularity(e.target.value))
    }

    const setTime = (e) => {
        dispatch(setFilterTime(e.target.value))
    }

    useEffect(() => {
        document.title = 'Filtered| Medias'
    }, [])

    if (!isSidebarOpen) {
        console.log('inside if')
        console.log(isSidebarOpen)
        return null
    }

    return (
        <>
            <Filters price={price}
                     liked={liked}
                     time={time}
                     setTime={setTime}
                     setPopularity={setPopularity}
                     setPrice={setPrice}/>
        </>
    );
};

export default FiltersContainer;