import React from 'react';
import {Buttons, Img, ProductContent, Title} from "./Product.styles";
import Button from "../../../common/Buttons/Button.component";
import {useDispatch} from "react-redux";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BiHeart} from "react-icons/all";
import {addToWishes} from "../../../redux/wishesReducer";
import {openMoreInfoModal} from "../../../redux/modalReducer";

const Product = ({isAuth, product, addToCart}) => {
    const dispatch = useDispatch()

    const addProduct = (product) => {
        return isAuth
            ? () => dispatch(addToCart(product))
            : () => alert('Please, sigh in first! Asshole!!')
    }

    return (
        <ProductContent image={product.image}>
            <Title  onClick={() => dispatch(openMoreInfoModal(product.id))}>
                {product.title}
            </Title>
            <Buttons>
                <Button color={'dodgerblue'}
                        onClick={addProduct(product)}>Add to <AiOutlineShoppingCart/></Button>
                <Button color={'#009B00'} wishes
                        onClick={() => addToWishes(product.id)}><BiHeart/></Button>
            </Buttons>
        </ProductContent>

    );
};

const MemoizedProduct = React.memo(Product)


export default MemoizedProduct;