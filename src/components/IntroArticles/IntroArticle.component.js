import React from 'react';
import {ArticleWrapper, Content, MoreInfo, Title} from "./IntroArticles.styles";
import {Img} from "../common/Imgs/Imgs";
import {Link} from "react-router-dom";

const IntroArticle = ({article}) => {
    const articleId = `/article?id=${article.id}`

    return (
        <ArticleWrapper>
            <Title>
                <Link to={articleId}> {article.title}</Link>
            </Title>
            <Link to={articleId}>
                <Img bgSize={'500px'} image={article.image} height={'200px'}/>
            </Link>
            <Content>
                {article.description}
                <Link to={articleId}><MoreInfo>...More info</MoreInfo></Link>
            </Content>

        </ArticleWrapper>
    );
};

export default IntroArticle;