import React from 'react';
import {Buttons, ProductContent, Title} from "./Product.styles";
import Button from "../../../common/Buttons/Button.component";
import {openMoreInfoModal} from "../../../redux/modalReducer";
import {useDispatch} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiHeart} from "react-icons/all";
import {addToWishes} from "../../../redux/wishesReducer";

const Product = ({isAuth, product, addToCart}) => {
    const dispatch = useDispatch()

    const addProduct = (product) => {
        return isAuth
            ? () => dispatch(addToCart(product))
            : () => alert('Please, sigh in first! Asshole!!')
    }

    return (
        <ProductContent image={product.image}>
            <Title onClick={() => dispatch(openMoreInfoModal(product.id))}>
                {product.title}
            </Title>
            <Buttons>
                <Button color={'dodgerblue'}
                        onClick={addProduct(product)}>Add to <AiOutlineShoppingCart/></Button>
                <Button color={'#009B00'} wishes
                        onClick={addToWishes(product.id)}><BiHeart/></Button>
            </Buttons>
        </ProductContent>

    );
};

export default Product;