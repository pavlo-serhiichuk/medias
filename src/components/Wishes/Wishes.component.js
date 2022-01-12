import React from 'react';
import {Wrapper} from "./Wishes.style";
import {BiHeart as Liked} from "react-icons/bi";
import Wish from './WishesProduct/Wish.component'

const Wishes = ({wishes, lang}) => {

    if (!wishes.length) {
        return (
            <Wrapper padTop={'150px'}>
                <h6>Упс... You haven't added anything to your Wishes<Liked/>. It's empty...
                    Please, turn back to All Elements and choose something.
                </h6>
            </Wrapper>
        )
    }

    return (
        <div>
            {wishes.map(wish => <Wish wish={wish} lang={lang}/>)}
        </div>
    );
}

export default Wishes;