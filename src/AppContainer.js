import React, {useEffect} from "react";
import styled from "styled-components";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './index.css';
import App from "./App";
import {openSidebar} from "./redux/sidebarReducer";
import {createPortal} from "react-dom";
import Portal from "./components/Portal/Portal.component";
import {getAsyncWishesProducts} from "./redux/wishesReducer";
import {changeCategory} from "./redux/productsReducer";

function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Routers = styled.div`
       width: 100%
`

function AppContainer() {

    const dispatch = useDispatch()
    let query = useQuery();

    let userId = useSelector(state => state.auth.userId)
    let isAlertOpen = useSelector(state => state.modal.isAlertOpen)
    let isLoginModalOpen = useSelector(state => state.modal.isLoginModalOpen)
    let isSignInModalOpen = useSelector(state => state.modal.isSighInModalOpen)
    let isPhotosPopupOpen = useSelector(state => state.modal.isPhotosPopupOpen)
    let isMoreInfoModalOpen = useSelector(state => state.modal.isMoreInfoModalOpen)
    let isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen)
    let category = useSelector(state => state.products.category)
    const open = () => dispatch(openSidebar())

    useEffect(() => {
        dispatch(getAsyncWishesProducts(userId))
        dispatch(openSidebar())
        dispatch(getAsyncWishesProducts())
        if(!category) {
            dispatch(changeCategory('books'))
        }
    }, [])

    return (
        <>
            <App query={query}
                 open={open}
                 isSidebarOpen={isSidebarOpen}
                 isPhotosPopupOpen={isPhotosPopupOpen}
                 isSignInModalOpen={isSignInModalOpen}
                 isMoreInfoModalOpen={isMoreInfoModalOpen}
                 isAlertOpen={isAlertOpen}
                 isLoginModalOpen={isLoginModalOpen}/>
            {createPortal(<Portal />, document.getElementById('portal'))}
        </>
    );
}

export default AppContainer;
