import React from 'react';
import {ArticleWrapper, Content} from "./IntroArticles.styles";
import {MiddleTitle} from "../common/Titles/Titles";
import {Img} from "../common/Imgs/Imgs";
import {Link} from "react-router-dom";

const IntroArticle = ({article}) => {
    return (
        <ArticleWrapper>
            <MiddleTitle>
                {article.title}
            </MiddleTitle>
            <Img bgSize={'500px'} image={article.image} height={'200px'}/>
            <Content>
                {article.description}
                <Link to={`/article?id=${article.id}`}>...More info</Link>
            </Content>

        </ArticleWrapper>
    );
};

export default IntroArticle;