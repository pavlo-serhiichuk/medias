import styled from "styled-components";

export const iconStyle = {width: '70px', height: '70px'}

export const A = styled.a`
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  right: 0;
  &:hover {
    background-color: #eeeeee;
  }
`

export const SGoDown = styled(A)`
    top: 0;
`

export const SGoTop = styled(A)`
    bottom: 0;
`
