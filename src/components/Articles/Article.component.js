import React from 'react';
import {ArticleWrapper, Content} from "./Articles.styles";
import {MiddleTitle} from "../../common/Titles/Titles";
import {Img} from "../../common/Imgs/Imgs";

const Article = ({article, openArticle}) => {
    // const articleDescription = article.description.split(' ').slice(0, 50).join(' ')

    return (
        <ArticleWrapper>
            <MiddleTitle>
                {article.title}
            </MiddleTitle>
            <Img bgSize={'500px'} image={article.image} height={'200px'}/>
            <Content>
                {article.description}
                <a href={`/article?id=${article.id}`} onClick={openArticle(article.id)}>...Read more </a>
            </Content>

        </ArticleWrapper>
    );
};

export default Article;