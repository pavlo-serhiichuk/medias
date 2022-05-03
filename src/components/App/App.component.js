import React from "react";
import {Wrapper, Content} from "./App.styles";
import Footer from "../Footer/Footer.component";
import HeaderContainer from "../Header/HeaderContainer";
import {BottomAnchor, GoBottom, GoTop, TopAnchor} from "../common/QuickScrolls/QuickScrolls.component";
import Alert from "../common/Alert/Alert";
import AppModals from "../AppModals/AppModals";
import AppRoutes from "../AppRoutes/AppRoutes";
import Sidebar from "../Sidebar/Sidebar.component.js";

function App({isAlertOpen}) {

    return (
        <>
            <Wrapper>
                {isAlertOpen && <Alert/>}
                <TopAnchor/>
                <GoTop/>
                <HeaderContainer/>
                <Content>
                    <Sidebar />
                    <AppRoutes/>
                    <AppModals/>
                </Content>
                <GoBottom/>
                <BottomAnchor/>
            </Wrapper>
            <Footer/>
        </>
    );
}

export default App;
