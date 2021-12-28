import styled from 'styled-components'

export const Wrapper = styled.div`
    overflow: hidden;
    transition: 0.2s;
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background-color: white;
    border-radius: 50%;
    font-size: 24px;
    box-shadow: 0 0 5px 1px rgb(33 130 119 / 46%), 0 0 10px 1px rgb(33 130 119 / 42%);
    &:hover {
            width: 300px;    
            border-radius: 5px;
            height: 400px;
    }
`

export const Title = styled.div`
    background-color: rgb(213 82 235);
`

export const Messages = styled.div`
    height: 270px;
    '
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: end;
    padding-left: 10px;
    border-top: 1px solid #e2e2e2;
`

export const Input = styled.input`
    height: 40px;
    width: 220px;
    border-radius: 20px;
    padding: 0 20px;
    font-size: 20px;
`

export const Submit = styled.button`
    // display: flex;
    // justify-content: center;
    // align-items: center;
        transition: 0.9s;
    padding: 0 0 0 4px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    border: 0;
    background-color: #fff;
    &:hover {
        color: red;
    }
`