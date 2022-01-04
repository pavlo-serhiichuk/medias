import styled from "styled-components";

export const A = styled.a`
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  transition: .3s;
  right: 5px;
  opacity: 0.7;
  &:hover {
    background-color: #eeeeee;
      opacity: 1;
  }
`

export const GoBottomWrapper = styled(A)`
    top: 80px;
    z-index: 700;
`

export const GoTopWrapper = styled(A)`
    bottom: 0;
`
