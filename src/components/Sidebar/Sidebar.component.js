import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FaFly, GrArticle, ImBooks, GiGuitar, GiHamburgerMenu as Hamburger} from "react-icons/all";
import {SidebarWrap, Categories, RightBtn} from "./Sidebar.style";
import API from "../../api/routerApi";
import {SmallTitle} from "../common/Titles/Titles";
import {changeCategory} from "../../redux/productsReducer";
import NativeFiltersContainer from "../NativeFilters/NativeFiltersContainer";
import {hideFilters, hideSidebar, openFilters} from "../../redux/sidebarReducer";

const Sidebar = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)
    const isFiltersOpen = useSelector(state => state.sidebar.isFiltersOpen)

    const toggleCategory = (nextCategory) => {

        dispatch(openFilters())
        category !== nextCategory && dispatch(changeCategory(nextCategory))

    }

    const close = () => {
        dispatch(hideSidebar())
        dispatch(hideFilters())
    }

    return (
        <SidebarWrap>
            <Categories>
                <SmallTitle>Categories:</SmallTitle>
                <Link to={API.articles.path} onClick={close}><GrArticle/> Useful Articles</Link>
                <RightBtn onClick={close}><Hamburger size={25}/></RightBtn>
                <Link to={API.books.path} onClick={() => toggleCategory('books')}><ImBooks/> Books</Link>
                <Link to={API.guitars.path} onClick={() => toggleCategory('guitars')}><GiGuitar/> Music Instruments</Link>
                <Link to={API.vouchers.path} onClick={() => toggleCategory('vouchers')}><FaFly/> Vouchers</Link>
            </Categories>
           {isFiltersOpen && <NativeFiltersContainer/>}
        </SidebarWrap>
    );
};

export default Sidebar;