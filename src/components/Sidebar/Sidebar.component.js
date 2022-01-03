import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SidebarWrap, Categories, RightBtn, LeftBtn} from "./Sidebar.style";

import {FaFly} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {GiGuitar} from "react-icons/gi";
import {GiHamburgerMenu as Hamburger} from "react-icons/all";

import {SmallTitle} from "../common/Titles/Titles";

import {changeCategory} from "../../redux/productsReducer";
import NativeFiltersContainer from "../NativeFilters/NativeFiltersContainer";
import {closeSidebar, openSidebar} from "../../redux/sidebarReducer";

const Sidebar = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)

    const toggleCategory = (nextCategory) => {
        category !== nextCategory && dispatch(changeCategory(nextCategory))
    }

    const close = () => dispatch(closeSidebar())

    return (
        <SidebarWrap>
            <Categories>
                <SmallTitle>Categories:</SmallTitle>
                <RightBtn onClick={close}><Hamburger size={25}/></RightBtn>
                <Link to="/books" onClick={() => toggleCategory('books')}><ImBooks/> Books</Link>
                <Link to="/guitars" onClick={() => toggleCategory('guitars')}><GiGuitar/> Music Instruments</Link>
                <Link to="/vouchers" onClick={() => toggleCategory('vouchers')}><FaFly/> Vouchers</Link>
            </Categories>
            <NativeFiltersContainer/>
        </SidebarWrap>
    );
};

export default Sidebar;