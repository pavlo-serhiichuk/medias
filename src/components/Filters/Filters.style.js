import styled from 'styled-components'
import {FlexWrap} from "../../common/FlexWrap/FlexWrap";
import {SmallTitle} from "../../common/Titles/Titles";

export const Wrapper = styled(FlexWrap)`
    width: 100%;
    border-bottom: 1px solid black;
`

export const FilterWrap = styled(FlexWrap)`
`

export const Form = styled.form`
`

export const Label = styled.div`
        margin: 5px 0;
        font-size: 14px;
        font-weight: bold;
`

export const Select = styled.select`
    min-width: 101px;
    height: 20px;
    margin-right: 40px;
`



export const FilterTitle = styled(SmallTitle)`
   width: 100px;
`

