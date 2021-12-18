import React from 'react';
import {ProductsContainer} from "./Products.styles";
import Product from "./Product/Product.component";
import {Wrapper} from "./Products.styles";

const Products = (props) => {

    if (props.isLoading) return <div>Завантаження...</div>

    return (
    <Wrapper>
            <ProductsContainer>
                {props.products
                    .filter(product => product !== undefined)
                    .map(product => <Product {...props} product={product} key={`${product.category}_${product.id}`}/>)}
            </ProductsContainer>
    </Wrapper>
    );
};

export default Products;