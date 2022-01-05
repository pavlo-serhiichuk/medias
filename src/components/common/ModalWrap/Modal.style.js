import styled from "styled-components";

export const ModalWrap = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    bottom: 0;
    background: rgba(0, 0, 0, .2);
    background-filter: blur(10px);  
    z-index: 10000;
`
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${p => p.justify || 'space-between'};
    position: relative;
    padding: 50px 20px 20px;
    margin: auto;
    margin-top: 20px;
    max-width: ${p => p.width || '440px'};
    background: white;
`