import React from 'react';
import {Link} from "react-router-dom";
import {FaFly} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {GiGuitar} from "react-icons/gi";
import {useDispatch, useSelector} from "react-redux";
import {GiHamburgerMenu as Hamburger} from "react-icons/all";
import {SidebarWrap, Categories, RightBtn} from "./Sidebar.style";
import API from "../../api/routerApi";
import {SmallTitle} from "../common/Titles/Titles";
import {closeSidebar} from "../../redux/sidebarReducer";
import {changeCategory} from "../../redux/productsReducer";
import NativeFiltersContainer from "../NativeFilters/NativeFiltersContainer";

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
                <Link to={API.books.path} onClick={() => toggleCategory('books')}><ImBooks/> Books</Link>
                <Link to={API.guitars.path} onClick={() => toggleCategory('guitars')}><GiGuitar/> Music Instruments</Link>
                <Link to={API.vouchers.path} onClick={() => toggleCategory('vouchers')}><FaFly/> Vouchers</Link>
            </Categories>
            <NativeFiltersContainer/>
        </SidebarWrap>
    );
};

export default Sidebar;