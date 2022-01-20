import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {FaFly} from "react-icons/fa";
import {ImBooks} from "react-icons/im";
import {GiGuitar} from "react-icons/gi";
import {GrArticle} from "react-icons/gr";
import {GiHamburgerMenu as Hamburger} from "react-icons/gi";

import {SidebarWrap, Categories, RightBtn} from "./Sidebar.style";

import API from "../../api/routerApi";
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
                <Link to={API.articles.path} onClick={close}><GrArticle/>{getTranslation(CATEGORIES.CATEGORY.ARTICLES, lang)}</Link>
                <RightBtn onClick={close}><Hamburger size={25}/></RightBtn>
                <Link to={API.books.path} onClick={() => toggleCategory('books')}><ImBooks/> {getTranslation(CATEGORIES.CATEGORY.BOOKS, lang)}</Link>
                <Link to={API.guitars.path} onClick={() => toggleCategory('guitars')}><GiGuitar/> {getTranslation(CATEGORIES.CATEGORY.GUITARS, lang)}</Link>
                <Link to={API.vouchers.path} onClick={() => toggleCategory('vouchers')}><FaFly/> {getTranslation(CATEGORIES.CATEGORY.VOUCHERS, lang)}</Link>
            </Categories>
           {isFiltersOpen && <NativeFiltersContainer/>}
        </SidebarWrap>
    );
};

export default Sidebar;