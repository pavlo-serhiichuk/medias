import styled from 'styled-components'

export const HugeTitle = styled.div`
    font-size: 40px;
    font-weight: bold;
`

export const BigTitle = styled.div`
    font-size: 30px;
    font-weight: bold;
`
export const MiddleTitle = styled.div`
    font-size: 23px;
    font-weight: bold;
    color: ${p => p.price && 'red' || p.author && 'grey' || p.producer && 'grey' || '#000'}
`

export const SmallTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: ${p => p.price && 'red' || p.author && 'grey' || p.producer && 'grey' || '#000'}
`