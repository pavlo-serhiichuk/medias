import React from 'react';
import Wrapper from "./Products.styles";
import Product from "./Product/Product.component";

const Products = (props) => {

    if (props.products === undefined) return <div>Завантаження...</div>
    if (!props.products.length) return <div>Завантаження...</div>

    return (
        <Wrapper>
            {props.products
                .filter(product => product !== undefined)
                .map(product => <Product {...props} product={product} key={product.id}/>)}
        </Wrapper>
    );
};

export default Products;