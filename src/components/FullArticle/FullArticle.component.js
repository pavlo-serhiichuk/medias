import React from 'react';
import {Wrapper} from "./FullArticle.style";
import {HugeTitle} from "../../common/Titles/Titles";

const CurrentArticle = ({currentArticle}) => {

    console.log(currentArticle)

    return (
        <Wrapper>
            <HugeTitle>
                {currentArticle.title}
            </HugeTitle>
        </Wrapper>
    );
};

export default CurrentArticle;