import React, {useEffect} from 'react';
import {Wrapper} from "../Cart/Cart.styles";
import {BiHeart} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {closeSidebar} from "../../redux/sidebarReducer";
import Wishes from "./Wishes.component";

const WishesContainer = () => {
    const dispatch = useDispatch()
    let wishes = useSelector(state => state.wishes.wishes)

    useEffect(() => {
        dispatch(closeSidebar())
        document.title = 'Wishes| Medias'
    }, [])

    return (
        <>
            <Wishes wishes={wishes} />
        </>
    )
}

export default WishesContainer;