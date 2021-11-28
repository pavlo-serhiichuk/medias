import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {Content, Description, Features} from "./MoreInfo.style";
import {BigTitle, MiddleTitle, SmallTitle} from "../../common/Titles/Titles";
import {Img} from "../../common/Imgs/Imgs";

const MoreInfo = ({closeMoreInfo, product}) => {
    return (
        <Modal width={'80%'}>
            <CloseButton onClick={closeMoreInfo}/>
            <Content>
                <Img image={product.image}/>
                <div>
                    <BigTitle>{product.title}</BigTitle>

                    {product.author
                    && <MiddleTitle producer>{product.author}</MiddleTitle>}
                    {product.producer
                    && <MiddleTitle author>{product.producer}</MiddleTitle>}

                    <MiddleTitle price>{product.price}</MiddleTitle>
                    {product.rating && <MiddleTitle>Rating: {product.rating}</MiddleTitle>}

                    {product.features && <Features>
                        <h5>Features: </h5>
                            {product.features.map(item => <li>{item}</li>)}
                        </Features>}

                    {product.conditions && <Features>
                        <h5>Conditions: </h5>
                        {product.conditions.map(item => <li>{item}</li>)}
                    </Features>}


                    {product.gunres
                    && <Features>
                        <h5>Gunres: </h5>
                        {product.gunres.map(item => <li>{item}</li>)}
                    </Features>}

                    <Description>{product.description}</Description>
                </div>

            </Content>
        </Modal>
    );
};

export default MoreInfo;