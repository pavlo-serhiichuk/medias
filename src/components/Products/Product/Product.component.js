import React from 'react';
import {BiHeart as Liked} from "react-icons/all";
import {AiOutlineShoppingCart as Cart} from "react-icons/ai"
import {Buttons, ProductContent, Title} from "./Product.styles";
import Button from "../../../common/Buttons/Button.component";

const Product = ({product, addToCart, openMoreInfo, setWish, category}) => {

    const {id, image, title} = product

    return (
        <ProductContent image={image}>
            <Title  onClick={() => openMoreInfo(id)}>
                {title}
            </Title>
            <Buttons>
                <Button color={'dodgerblue'}
                        onClick={() => addToCart(product)}>
                    Add to <Cart/>
                </Button>
                <Button color={'#009B00'}
                        wishes
                        onClick={() => setWish(product, category, id)}>
                    <Liked/>
                </Button>
            </Buttons>
        </ProductContent>

    );
};

const MemoizedProduct = React.memo(Product)


export default MemoizedProduct;