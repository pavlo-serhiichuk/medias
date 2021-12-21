import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 800px;
    height: 105px;
    display: flex;
    flex-direction: row;
    margin: 15px 0 20px 20px;

     @media screen and (max-width: 992px) {
        overflow: scroll;
        width: 600px;
        height: 105px;
     }
    @media screen and (max-width: 768px) {
    width: 600px;
    }
    @media screen and (max-width: 576px) {
    width: 480px;
    }
`