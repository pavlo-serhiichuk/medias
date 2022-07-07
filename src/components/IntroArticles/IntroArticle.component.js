import React from 'react';
import {ArticleWrapper, Content, MoreInfo, Title} from "./IntroArticles.styles";
import {Img} from "../common/Imgs/Imgs";
import {Link, NavLink} from "react-router-dom";

const IntroArticle = ({article}) => {
    const articleId = `/articles/article/${article.id}`

    return (
        <ArticleWrapper>
            <Title>
                <NavLink to={articleId}> {article.title}</NavLink>
            </Title>
            <NavLink to={articleId}>
                <Img bgSize={'500px'} image={article.image} />
            </NavLink>
            <Content>
                {article.description}
                <NavLink to={articleId}><MoreInfo>...More info</MoreInfo></NavLink>
            </Content>

        </ArticleWrapper>
    );
};

export default IntroArticle;