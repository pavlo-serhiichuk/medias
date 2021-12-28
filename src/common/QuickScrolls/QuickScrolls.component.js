import React from "react";
import {BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/all";

import {GoBottomWrapper, GoTopWrapper} from "./QuickScrolls.style";

export const TopAnchor = () => <a name='top-anchor'/>
export const BottomAnchor = () => <a name='bottom-anchor'/>

export const GoBottom = () => (
    <GoBottomWrapper href='#bottom-anchor'>
        <BsFillCaretDownFill size={70}/>
    </GoBottomWrapper>
)

export const GoTop = () => (
    <GoTopWrapper href='#top-anchor'>
        <BsFillCaretUpFill size={70} />
    </GoTopWrapper>
)
