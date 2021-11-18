import React from 'react';
import {ProductContent, Title} from "./Product.styles";
import Button from "../../../common/Buttons/Button.component";
import {openMoreInfoModal} from "../../../redux/modalReducer";
import {useDispatch} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai"

const Product = ({isAuth, product, addToCart}) => {
    const dispatch = useDispatch()

    return (
            <ProductContent image={product.image}>

                <Title onClick={() => dispatch(openMoreInfoModal(product.id))}>
                    {product.title}
                </Title>
                {isAuth
                    ? <Button color={'dodgerblue'} onClick={() => addToCart(product)}>Add
                        to <AiOutlineShoppingCart/></Button>
                    : <Button color={'dodgerblue'} onClick={() => alert('Please, sigh in first! Asshole!!')}>Add
                        to <AiOutlineShoppingCart/></Button>}
            </ProductContent>

    );
};

export default Product;