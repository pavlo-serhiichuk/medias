import styled from 'styled-components'

export const SidebarWrap = styled.div`
    display: flex;
    flex-direction: column;
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

