import './index.css';
import React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import App from "./App";
import styled from "styled-components";

function useQuery() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const Routers = styled.div`
       width: 100%
`

function AppContainer() {
    let query = useQuery();
    const isSignInModalOpen = useSelector(state => state.modal.isSighInModalOpen)
    const isLoginModalOpen = useSelector(state => state.modal.isLoginModalOpen)
    const isMoreInfoModalOpen = useSelector(state => state.modal.isMoreInfoModalOpen)
    const isPhotosPopupOpen = useSelector(state => state.modal.isPhotosPopupOpen)
    let isFiltersOpen = useSelector(state => state.filters.isFiltersOpen)

    return (
        <>
            <App query={query}
                 isFiltersOpen={isFiltersOpen}
                 isPhotosPopupOpen={isPhotosPopupOpen}
                 isSignInModalOpen={isSignInModalOpen}
                 isMoreInfoModalOpen={isMoreInfoModalOpen}
                 isLoginModalOpen={isLoginModalOpen}/>
        </>
    );
}

export default AppContainer;
