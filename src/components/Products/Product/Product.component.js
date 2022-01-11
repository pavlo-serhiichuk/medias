import React from 'react';
import {BiHeart as Liked} from "react-icons/bi";
import {AiOutlineShoppingCart as Cart} from "react-icons/ai"
import {Buttons, ProductContent, Title} from "./Product.styles";
import {PrimaryButton, SuccessButton} from "../../common/Buttons/Button.component";
import {getTranslation} from "../../../utils/translations/getTranslation";
import {FILTERS, PRODUCT} from "../../../utils/translations/translation";

const Product = ({product, addToCart, openMoreInfo, setWish, category}) => {

    const {id, image, title} = product

    return (
        <ProductContent image={image}>
            <Title  onClick={() => openMoreInfo(id)}>
                {title}
            </Title>
            <Buttons>
                <PrimaryButton color={'dodgerblue'} onClick={() => addToCart(product)}>
                    {getTranslation(PRODUCT.CART.TITLE)} <Cart/>
                </PrimaryButton>
                <SuccessButton onClick={() => setWish(product, category, id)}>
                    <Liked/>
                </SuccessButton>
            </Buttons>
        </ProductContent>

    );
};

const MemoizedProduct = React.memo(Product)


export default MemoizedProduct;