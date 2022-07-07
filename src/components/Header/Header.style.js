import styled, {css} from 'styled-components'

const defaultStyle = css`
  transition: .4s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`

export const Header = styled.div`
  margin: 0 auto;
  padding: 0 0 0 0;
  box-sizing: border-box;
  border-bottom: 2px solid grey;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Left = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Article = styled.h1`

  margin-right: 30px;
  width: 165px;
  margin-left: 15px;
  box-sizing: border-box;

  &:hover {
    cursor: default;
    color: #000000;
    opacity: 1;
  }

  @media screen and (max-width: 576px) {
    display: none;
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;

  & > button {
    margin: 5px;
  }
`

export const Image = styled.img`
  margin: 20px 5px 0;
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  object-position: 50% 50%;
  cursor: pointer;
`

export const UserNeeds = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`
export const LinkWrap = styled.div`
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  padding: 0 5px;
  width: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Profile = styled.div`
  padding: 0 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-left: 1px solid black;

  &:hover {
    background-color: rgba(192, 192, 192, 0.35);
  }
`

export const Wishes = styled.div`
  ${defaultStyle}
  &:hover {
    background-color: rgba(192, 192, 192, 0.35);
  }
`
export const Cart = styled.div`
  ${defaultStyle};
  border-right: 1px solid #000;
  position: relative;
  width: 80px;
  border-left: 1px solid #000;

  &:hover {
    background-color: rgba(192, 192, 192, 0.35);
  }
`

export const ItemsAmount = styled.span`
  position: absolute;
  width: 30px;
  top: 3px;
  border-radius: 50%;
  background-color: #ff694b;
  text-align: center;`

export const WishesAmount = styled(ItemsAmount)`
  right: 88px;
`
export const CartAmount = styled(ItemsAmount)`
  right: -8px;
`
