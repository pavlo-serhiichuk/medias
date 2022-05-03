import styled from 'styled-components'

export const SidebarWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 215px;
    height: 100vh;
    border-right: 1px solid grey;
    font-size: 15px;
        @media screen and (max-width: 768px) {
            position: absolute;
            left: 0;
            background-color: #fff;
            z-index: 1000;
        }
`

export const ItemTitle = styled.span`
  font-size: 20px;
`;

export const Categories = styled.div`
  display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px 0 10px 10px;
`

export const Button = styled.div`
    position: absolute;
    top: 0;
    width: 40px;
    height: 34px;
    text-align: center;
    cursor: pointer;
    text-align: center;
    cursor: pointer;
    z-index: 2000;
    &:hover {
        background-color: #D3D3D3;
    }
`

export const RightBtn = styled(Button)`
  right: 6px;
`

export const LeftBtn = styled(Button)`
  left: 6px;
`