import styled from 'styled-components'

export const Wrapper = styled.div`
    display: ${p => p.display && p.display};
    flex-direction: column;
    padding: 0 40px;
    position: relative;
    padding-top: ${p => p.padTop};
    min-height: 100vh;
`

//