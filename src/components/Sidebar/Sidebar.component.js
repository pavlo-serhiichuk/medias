import React from 'react';
import {SidebarWrap, Button, Title, Categories} from "./Sidebar.style";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../redux/productsReducer";
import {GiGuitar} from "react-icons/gi";
import {ImBooks} from "react-icons/im";
import {FaFly} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/all";
import NativeFiltersContainer from "../NativeFilters/NativeFiltersContainer";
import {SmallTitle} from "../../common/Titles/Titles";

const Sidebar = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)
    const isFiltersOpen = useSelector(state => state.products.isFiltersOpen)

    const toggleCategory = (nextCategory) => {
        category !== nextCategory && dispatch(changeCategory(nextCategory))
    }

    return (
        <SidebarWrap>
            <Categories>
                <SmallTitle>Categories:</SmallTitle>
                <Button><GiHamburgerMenu/></Button>
                <Link to="/books" onClick={() => toggleCategory('books')}><ImBooks/> Books</Link>
                <Link to="/guitars" onClick={() => toggleCategory('guitars')}><GiGuitar/> Music Instruments</Link>
                <Link to="/vouchers" onClick={() => toggleCategory('vouchers')}><FaFly/> Vouchers</Link>
            </Categories>
            {/*{isFiltersOpen && <NativeFiltersContainer />}*/}
            <NativeFiltersContainer/>
        </SidebarWrap>
    );
};

export default Sidebar;