import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeSidebar} from "../../redux/sidebarReducer";
import Wishes from "./Wishes.component";

const WishesContainer = () => {
    const dispatch = useDispatch()
    let wishesProducts = useSelector(state => state.wishes.wishesProducts)

    useEffect(() => {
        dispatch(closeSidebar())
        document.title = 'Wishes| Medias'
    }, [])

    return (
        <>
            <Wishes wishes={wishesProducts} />
        </>
    )
}

export default WishesContainer;