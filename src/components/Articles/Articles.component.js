import React from 'react';
import {Wrapper} from './Articles.styles'
import Article from "./Article.component";

const Articles = (props) => {
    return (
        <Wrapper>
            {props.articles.map(article => <Article {...props} article={article}/>)}
        </Wrapper>
    );
};

export default Articles;