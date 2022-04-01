import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {FaFly} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {GiGuitar} from "react-icons/gi";
import {GrArticle} from "react-icons/gr";
import {GiHamburgerMenu as Hamburger} from "react-icons/gi";

import {SidebarWrap, Categories, RightBtn} from "./Sidebar.style";

import ROUTE from "../../api/routerPath";
import {SmallTitle} from "../common/Titles/Titles";
import {changeCategory, getAsyncVouchers} from "../../redux/productsReducer";
import {hideFilters, hideSidebar, openFilters} from "../../redux/sidebarReducer";

import NativeFiltersContainer from "../NativeFilters/NativeFiltersContainer";

import {CATEGORIES} from "../../utils/translations/translation";
import {getTranslation} from "../../utils/translations/getTranslation";

const Sidebar = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)
    const isFiltersOpen = useSelector(state => state.sidebar.isFiltersOpen)
    const lang = useSelector(state => state.lang.language)

    const toggleCategory = (nextCategory) => {
        dispatch(openFilters())

        category === 'filteredVouchers'
        && nextCategory === 'vouchers'
        && dispatch(getAsyncVouchers())

        category !== nextCategory && dispatch(changeCategory(nextCategory))
    }

    const close = () => {
        dispatch(hideSidebar())
        dispatch(hideFilters())
    }

    return (
        <SidebarWrap>
            <Categories>
                <SmallTitle>{getTranslation(CATEGORIES.LOGO.TITLE, lang)}:</SmallTitle>
                <NavLink to={ROUTE.articles.path} onClick={close}><GrArticle/>{getTranslation(CATEGORIES.CATEGORY.ARTICLES, lang)}</NavLink>
                <RightBtn onClick={close}><Hamburger size={25}/></RightBtn>
                <NavLink to={ROUTE.books.path} onClick={() => toggleCategory('books')}><ImBooks/> {getTranslation(CATEGORIES.CATEGORY.BOOKS, lang)}</NavLink>
                <NavLink to={ROUTE.guitars.path} onClick={() => toggleCategory('guitars')}><GiGuitar/> {getTranslation(CATEGORIES.CATEGORY.GUITARS, lang)}</NavLink>
                <NavLink to={ROUTE.vouchers.path} onClick={() => toggleCategory('vouchers')}><FaFly/> {getTranslation(CATEGORIES.CATEGORY.VOUCHERS, lang)}</NavLink>
            </Categories>
           {isFiltersOpen && <NativeFiltersContainer/>}
        </SidebarWrap>
    );
};

export default Sidebar;