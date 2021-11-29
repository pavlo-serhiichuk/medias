import styled from 'styled-components'

export const SidebarWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 20px 0 0 10px;
    width: 181px;
    height: 500px;
    border-right: 1px solid grey;
    font-size: 15px;
        @media screen and (max-width: 768px) {
            position: absolute;
            background-color: #fff;
            z-index: 1000;
        }

`

export const Title = styled.div`
    font-size: 15px;
    font-weight: bold; 
    cursor: default; 
`

export const Button = styled.div`
    position: absolute;
    top: 0;
    right: 6px;
    margin-top: 5px;
    width: 25px;
    height: 25px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #D3D3D3;
    }
`