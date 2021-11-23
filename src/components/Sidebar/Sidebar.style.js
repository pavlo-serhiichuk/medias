import styled from 'styled-components'

export const SidebarWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    height: 500px;
        @media screen and (max-width: 768px) {
            position: absolute;
            background-color: #fff;
            z-index: 1000;
        }

`