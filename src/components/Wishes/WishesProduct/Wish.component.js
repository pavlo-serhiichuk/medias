import React from 'react';
import {AiOutlineShoppingCart as Cart} from "react-icons/ai"
import {Operators, Title, Wrapper, Img, Description} from "./WishProduct.style";
import {BUTTON} from "../../../utils/translations/translation";
import {getTranslation} from "../../../utils/translations/getTranslation";
import {PrimaryButton, RedButton, SuccessButton} from "../../common/Buttons/Button.component";

const Wish = ({wish, lang}) => {
    return (
        <Wrapper>
            <Description>
                <Img image={wish.image}/>
                <Title>{wish.title}</Title>
            </Description>
            <Operators>
                <SuccessButton operator='true' color='dodgerblue'>
                    {getTranslation(BUTTON.MORE_INFO, lang)}
                </SuccessButton>
                <RedButton operator='true' color='indianred'>
                    {getTranslation(BUTTON.DELETE, lang)}
                </RedButton>
                <PrimaryButton operator='true' color='green' onClick={() => {}}>
                    {getTranslation(BUTTON.CART.TITLE, lang)} <Cart/>
                </PrimaryButton>
            </Operators>
        </Wrapper>
    );
};

export default Wish;