import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";

import App from "./App.component";

import {openSidebar} from "../../redux/sidebarReducer";
import {getAsyncWishesProducts} from "../../redux/wishesReducer";

import Portal from "../Portal/Portal.component";

function AppContainer() {

    const dispatch = useDispatch()

    let userId = useSelector(state => state.auth.userId)
    let isAlertOpen = useSelector(state => state.modal.isAlertOpen)

    useEffect(() => {
        dispatch(getAsyncWishesProducts(userId))
        dispatch(openSidebar())
    }, [])


    return (
        <>
            <App isAlertOpen={isAlertOpen}/>
            {createPortal(<Portal />, document.getElementById('portal'))}
        </>
    );
}

export default AppContainer;
