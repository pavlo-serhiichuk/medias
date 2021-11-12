import React from 'react';
import {Wrapper} from "./FullArticle.style";
import {HugeTitle} from "../../common/Titles/Titles";
import {Img} from "../../common/Imgs/Imgs";

const FullArticle = ({fullArticle}) => {

    // console.log('fullArticle')

    return (
        <Wrapper>
            <HugeTitle>
                {fullArticle.title}
            </HugeTitle>
            <Img image={fullArticle.image}/>
            <div>{fullArticle.description}</div>
        </Wrapper>
    );
};

export default FullArticle;