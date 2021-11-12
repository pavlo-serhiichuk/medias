import styled from 'styled-components'

export const Wrapper = styled.div`
    display: ${p => p.display && p.display};
    flex-direction: column;
    position: relative;
    padding-top: ${p => p.padTop};
    min-height: 100vh;
`
export const Icon = styled.div`
    position: absolute;
    top: 200px;
    left: 100px;
    width: 500px;
    height: 500px;
`