import React from 'react';
import Wrapper from "./Products.styles";
import Product from "./Product/Product.component";

const Products = (props) => {

   if (props.isFetching) return  <div>Завантаження...</div>

    return (
        <Wrapper>
            {props.products
                .filter(product => product !== undefined)
                .map(product => <Product {...props} product={product} key={`${product.category}_${product.id}`}/>)}
        </Wrapper>
    );
};

export default Products;