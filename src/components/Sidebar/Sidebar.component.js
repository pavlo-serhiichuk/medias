import React from 'react';
import {SidebarWrap} from "./Sidebar.style";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../redux/productsReducer";
import {GiGuitar} from "react-icons/gi";
import {ImBooks} from "react-icons/im";
import {FaFly} from "react-icons/fa";

const Sidebar = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.products.category)

    const toggleCategory = (nextCategory) => {
        category !== nextCategory && dispatch(changeCategory(nextCategory))
    }

    return (
        <SidebarWrap>
            <Link to="/" onClick={() => toggleCategory('books')}><ImBooks /> Books</Link>
            <Link to="/guitars" onClick={() => toggleCategory('guitars')}><GiGuitar/>Music Instruments</Link>
            <Link to="/traveling" onClick={() => toggleCategory('traveling')}><FaFly/>Traveling</Link>
        </SidebarWrap>
    );
};

export default Sidebar;