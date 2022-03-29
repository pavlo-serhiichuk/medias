import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";

import App from "./App.component";

import {openSidebar} from "../../redux/sidebarReducer";
import {changeCategory} from "../../redux/productsReducer";
import {getAsyncWishesProducts} from "../../redux/wishesReducer";

import Portal from "../Portal/Portal.component";

function AppContainer() {

    const dispatch = useDispatch()

    let userId = useSelector(state => state.auth.userId)
    let isAlertOpen = useSelector(state => state.modal.isAlertOpen)
    let category = useSelector(state => state.products.category)

    useEffect(() => {
        dispatch(getAsyncWishesProducts(userId))
        dispatch(openSidebar())

        if(!category) {
            dispatch(changeCategory('books'))
        }
    }, [])

    return (
        <>
            <App isAlertOpen={isAlertOpen}/>
            {createPortal(<Portal />, document.getElementById('portal'))}
        </>
    );
}

export default AppContainer;
