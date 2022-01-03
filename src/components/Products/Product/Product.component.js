import React from 'react';
import {BiHeart as Liked} from "react-icons/all";
import {AiOutlineShoppingCart as Cart} from "react-icons/ai"
import {Buttons, ProductContent, Title} from "./Product.styles";
import {PrimaryButton, SuccessButton} from "../../common/Buttons/Button.component";

const Product = ({product, addToCart, openMoreInfo, setWish, category}) => {

    const {id, image, title} = product

    return (
        <ProductContent image={image}>
            <Title  onClick={() => openMoreInfo(id)}>
                {title}
            </Title>
            <Buttons>
                <PrimaryButton color={'dodgerblue'} onClick={() => addToCart(product)}>
                    Add to <Cart/>
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