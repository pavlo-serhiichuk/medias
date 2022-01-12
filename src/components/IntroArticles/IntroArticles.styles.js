import styled from 'styled-components'
import {MiddleTitle} from "../common/Titles/Titles";

export const Wrapper = styled.div`
        min-height: 100vh;
        padding: 0 20px;
`

export const ArticleWrapper = styled.div`
    border-bottom: 1px solid #C5C4C3;
    padding-top: 8px;
`

export const Title = styled(MiddleTitle)`
    &:hover { 
        color: red;
        text-decoration: underline red;
    }
`

export const Content = styled.div`
    font-size: 20px;

`

export const MoreInfo = styled.span`
    color: blue;
    &:hover {
        color: red;
    }
`



