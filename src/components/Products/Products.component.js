import React from 'react';
import {Wrapper} from "./Products.styles";
import {ProductsWrap} from "./Products.styles";
import Product from "./Product/Product.component";

const Products = (props) => {

    if (props.isLoading) return <div>Завантаження...</div>

    return (
    <Wrapper>
            <ProductsWrap>
                {props.products
                    .filter(product => product !== undefined)
                    .map(product => <Product {...props} product={product} key={`${product.category}_${product.id}`}/>)}
            </ProductsWrap>
    </Wrapper>
    );
};

const MemoizedProducts = React.memo(Products)

export default MemoizedProducts;