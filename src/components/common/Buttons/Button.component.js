import styled from 'styled-components'

const Button = styled.button`
    width: 100%;
    height: ${p => p.height || '35px'};
    border-radius: 5px;
    border: none;
    outline: none;
`

export const PrimaryButton = styled(Button)`
    background-color: dodgerblue;
    &:hover {
        background-color: #46B8FF;
    }
`

export const SuccessButton = styled(Button)`
    background-color: #009B00;
    &:hover {
        background-color: #00AE00;
    }
`

export const RedButton = styled(Button)`
    background-color: indianred;
    &:hover {
        background-color: #cd6330;
    }
`

export const GoldButton = styled(Button)`
    background-color: #f3d11a;
    &:hover {
        background-color: #ffd700;
    }
`

export default Button;