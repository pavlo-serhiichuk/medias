import styled from 'styled-components'
import {FlexWrap} from "../common/FlexWrap/FlexWrap";

export const Wrapper = styled.div`
    overflow: hidden;
    transition: .4s;
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
        width: 320px;    
        border-radius: 5px;
        height: 400px;
    }
`

export const Title = styled.div`
    background-color: rgb(213 82 235);
`

export const Dialog = styled.div`
    height: 270px;
`
export const Consultant = styled(FlexWrap)`
   padding: 10px 10px;
   gap: 10px;
   align-items: center; 
`

export const AvatarWrap = styled.div`
`

export const AvatarImage = styled.img`
    max-width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
`

export const Avatar = () => (
    <AvatarWrap>
        <AvatarImage src='https://img.freepik.com/free-photo/attractive-sexy-online-medical-consultant-headset-looks-camera-smiles_213441-726.jpg?size=626&ext=jpg'/>
    </AvatarWrap>
)

export const MessageWrap = styled(FlexWrap)`
   gap: 2px;
   flex-wrap: wrap;
   padding: 5px 25px 10px;
   min-height: 43px;
   width: 220px;
   border-radius: 30px;
   background-color: #ECECEC;
   font-size: 15px;
   text-align: left;
   line-height: 20px;
`
export const Message = styled.span`
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

export const SubmitButton = styled.button`
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
