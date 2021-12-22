import {BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/all";
import {iconStyle, SGoDown, SGoTop} from "./QuickScrolls.style";
import React from "react";

export const GoDown = () => {
    return (
        <>
            <a name={'top'}></a>
            <SGoDown href={'#down'}><BsFillCaretDownFill style={iconStyle}/></SGoDown>
        </>
    )
}

export const GoTop = () => {
    return (
        <>
            <a name={'down'}></a>
            <SGoTop href={"#top"}><BsFillCaretUpFill style={iconStyle}/></SGoTop>
        </>
    )
}
