import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {hideSidebar} from "../../redux/sidebarReducer";
import Wishes from "./Wishes.component";

const WishesContainer = () => {
    const dispatch = useDispatch()
    let wishesProducts = useSelector(state => state.wishes.wishesProducts)
    let lang = useSelector(state => state.lang.language)

    useEffect(() => {
        dispatch(hideSidebar())
        document.title = 'Wishes| Medias'
    }, [])

    return (
        <>
            <Wishes wishes={wishesProducts} lang={lang} />
        </>
    )
}

export default WishesContainer;