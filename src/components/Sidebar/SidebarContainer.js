import React from 'react';
import Sidebar from "./Sidebar.component";
import {LeftBtn} from "./Sidebar.style";
import {GiHamburgerMenu as Hamburger} from "react-icons/gi";
import {openSidebar} from "../../redux/sidebarReducer";
import {useDispatch, useSelector} from "react-redux";

const SidebarContainer = () => {
    const dispatch = useDispatch()
    const open = () => dispatch(openSidebar())
    const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen)

    return (
        <>
            {
                isSidebarOpen
                    ? <Sidebar />
                    : <LeftBtn onClick={open}><Hamburger size={25}/></LeftBtn>
            }
        </>
    );
};

export default SidebarContainer;