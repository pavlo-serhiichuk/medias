import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {FaFly, GrArticle, ImBooks, GiGuitar, GiHamburgerMenu as Hamburger} from "react-icons/all";
import {SidebarWrap, Categories, RightBtn} from "./Sidebar.style";
import API from "../../api/routerApi";
import {SmallTitle} from "../common/Titles/Titles";
import {changeCategory} from "../../redux/productsReducer";
import NativeFiltersContainer from "../NativeFilters/NativeFiltersContainer";
import {closeFilters, closeSidebar, openFilters} from "../../redux/sidebarReducer";
import {getTranslation} from "../../utils/translations/getTranslation";
import {CATEGORIES, HEADER, translation} from "../../utils/translations/translation";

const Sidebar = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)
    const isFiltersOpen = useSelector(state => state.sidebar.isFiltersOpen)

    const toggleCategory = (nextCategory) => {

        dispatch(openFilters())
        category !== nextCategory && dispatch(changeCategory(nextCategory))

    }

    const close = () => {
        dispatch(closeSidebar())
        dispatch(closeFilters())
    }
    return (
        <SidebarWrap>
            <Categories>
                <SmallTitle>{getTranslation(CATEGORIES.LOGO.TITLE)}:</SmallTitle>
                <Link to={API.articles.path} onClick={close}><GrArticle/>{getTranslation(CATEGORIES.CATEGORY.ARTICLES)}</Link>
                <RightBtn onClick={close}><Hamburger size={25}/></RightBtn>
                <Link to={API.books.path} onClick={() => toggleCategory('books')}><ImBooks/> {getTranslation(CATEGORIES.CATEGORY.BOOKS)}</Link>
                <Link to={API.guitars.path} onClick={() => toggleCategory('guitars')}><GiGuitar/> {getTranslation(CATEGORIES.CATEGORY.GUITARS)}</Link>
                <Link to={API.vouchers.path} onClick={() => toggleCategory('vouchers')}><FaFly/> {getTranslation(CATEGORIES.CATEGORY.VOUCHERS)}</Link>
            </Categories>
           {isFiltersOpen && <NativeFiltersContainer/>}
        </SidebarWrap>
    );
};

export default Sidebar;