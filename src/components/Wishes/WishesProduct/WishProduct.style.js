import styled from "styled-components";
import {FlexWrap} from "../../../common/FlexWrap/FlexWrap";

export const Wrapper = styled(FlexWrap)`
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
    margin: 10px;
    border: 1px solid grey;
`

export const Description = styled(FlexWrap)`
    justify-content: right;
`

export const Img = styled.div`
  min-width: 150px;
  height: 235px;
  background-image:url(${p => p.image});
  background-repeat: no-repeat;
  background-size: 150px;
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
  overflow: scroll;
  max-width: 600px;
`

export const Operators = styled.div`
    width: 230px;
    margin-left: 5px;
`

export const AmountContainer = styled.div`
    margin: 0 auto;
    width: 100px;
    display: flex;
    justify-content: space-around;
`

export const Amount = styled.div`
    margin: 5px;
    padding-left: 4px;
    width: 42px;
    height: 32px;
    border: 1px solid grey;
`
