import styled from "styled-components";

export const A = styled.a`
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  right: 0;
  &:hover {
    background-color: #eeeeee;
  }
`

export const GoBottomWrapper = styled(A)`
    top: 0;
`

export const GoTopWrapper = styled(A)`
    bottom: 0;
`
