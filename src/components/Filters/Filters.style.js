import styled from 'styled-components'
import {FlexWrap} from "../common/FlexWrap/FlexWrap";
import {MiddleTitle, SmallTitle} from "../common/Titles/Titles";

export const Wrapper = styled(FlexWrap)`
    width: 100%;
    border-bottom: 1px solid black;
`

export const FilterWrap = styled(FlexWrap)`
      margin: 5px 10px 5px 0;
      // height: 15px;
`

export const Label = styled.div`
        margin: 5px 10px;
        font-size: 20px;
        font-weight: bold;
`

export const FilterTitle = styled(MiddleTitle)`
margin-top: 8px;
   width: 100px;
`

