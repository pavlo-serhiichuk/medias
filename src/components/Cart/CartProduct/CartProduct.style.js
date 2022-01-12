import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
    background-color: #fff;
    
`

export const Description = styled.div`
     display: flex;
    flex-direction: row;
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
  font-size: 30px;
  font-weight: bold;
  padding: 0 10px;
`

export const Operators = styled.div`
    width: 160px;
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