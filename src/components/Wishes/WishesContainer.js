import React from 'react';
import {Wrapper} from "../Cart/Cart.styles";
import {BiHeart} from "react-icons/all";
import {useSelector} from "react-redux";

const WishesContainer = () => {

    const wishes = useSelector(state => state.wishes.wishes)

    if (wishes) {
        return (
            <Wrapper padTop={'150px'}>
                <h6>Упс... You haven't added anything to your Wishes<BiHeart/>. It's empty...
                    Please, turn back to All Elements and choose something.
                </h6>
            </Wrapper>
        )
    }

    return (
        <div>
            Wishes
        </div>
    );
}

export default WishesContainer;