import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {
    Content,
    Description,
    Features,
    ImgContaiter,
    InfoImg,
    OtherImgs,
    SmallImg, SSmallImg
} from "./MoreInfo.style";
import {BigTitle, MiddleTitle} from "../../common/Titles/Titles";


const MoreInfo = ({closeMoreInfo, product}) => {
    const {image, author,
        producer, price,
        features, title,
        conditions, rating,
        gunres, description} = product

    return (
        <Modal width={'80%'}>
            <CloseButton onClick={closeMoreInfo}/>
            <Content>
                <ImgContaiter>
                    <InfoImg src={image}/>
                    {Array.isArray(image)
                        ? <OtherImgs>{image.map(image => <SmallImg image={image}/>)}</OtherImgs>
                        : null}
                </ImgContaiter>
                <div>
                    <BigTitle>{title}</BigTitle>

                    {author
                    && <MiddleTitle producer>{author}</MiddleTitle>}
                    {producer
                    && <MiddleTitle author>{producer}</MiddleTitle>}

                    <MiddleTitle price>{price}</MiddleTitle>
                    {rating && <MiddleTitle>Rating: {rating}</MiddleTitle>}

                    {features && <Features>
                        <h5>Features: </h5>
                        {features.map(item => <li>{item}</li>)}
                    </Features>}

                    {conditions && <Features>
                        <h5>Conditions: </h5>
                        {conditions.map(item => <li>{item}</li>)}
                    </Features>}


                    {gunres
                    && <Features>
                        <h5>Gunres: </h5>
                        {gunres.map(item => <li>{item}</li>)}
                    </Features>}

                    <Description>{description}</Description>
                </div>

            </Content>
        </Modal>
    );
};

export default MoreInfo;