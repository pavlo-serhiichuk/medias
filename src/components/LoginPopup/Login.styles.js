import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
`

export const Label = styled.label`
    text-transform: capitalize;
`;

export const Input = styled.input`
    width: 230px;
    font-size: 15px;
    box-sizing: border-box;
    height: 30px;
    padding: 5px;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
    padding: 0 5px;
    text-transform: capitalize;
`
