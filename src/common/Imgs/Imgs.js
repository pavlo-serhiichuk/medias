import styled from 'styled-components'

export const Img = styled.div`
  margin: 0 auto;
  height: ${p => p.height || '350px'} ;
  background-position: center;
  background-image: url(${p => p.image});
  background-repeat: no-repeat;
  background-size: ${p => p.bgSize || '250px'};
`