import './index.css';
import React from "react";
import {Provider, useSelector} from "react-redux";
import {BrowserRouter as Router, useLocation} from "react-router-dom";
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

    return (
        <>
            <App query={query}
                 isSignInModalOpen={isSignInModalOpen}
                 isMoreInfoModalOpen={isMoreInfoModalOpen}
                 isLoginModalOpen={isLoginModalOpen}/>
        </>
    );
}

export default AppContainer;
