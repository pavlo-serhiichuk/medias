import React from 'react';
import {Wrapper} from './IntroArticles.styles'
import IntroArticle from "./IntroArticle.component";

const IntroArticles = (props) => {
    return (
        <Wrapper>
            {props.articles.map(article => <IntroArticle {...props} article={article} key={article.id}/>)}
        </Wrapper>
    );
};

export default IntroArticles;