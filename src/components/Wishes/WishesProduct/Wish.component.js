import React from 'react';
import {AiOutlineMinus as Minus, AiOutlinePlus as Plus} from 'react-icons/ai';
import Button from "../../../common/Buttons/Button.component";
import {Operators, Title, Wrapper, Img, AmountContainer, Amount, Description, Content} from "./WishProduct.style";
import {openMoreInfoModal} from "../../../redux/modalReducer";

const Wish = ({wish}) => {
    return (
        <Wrapper>
            <Description>
                <Img image={wish.image}/>
                <Title>{wish.title}</Title>
            </Description>
            <Operators>
                <Button operator='true' color='dodgerblue'>
                    More Info
                </Button>
                <Button operator='true' color='indianred'>
                    Delete
                </Button>
                <Button operator='true' color='green' onClick={() => {
                }}>
                    Add to Cart
                </Button>
            </Operators>
        </Wrapper>
    );
};

export default Wish;