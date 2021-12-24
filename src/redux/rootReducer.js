import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {authReducer} from "./authReducer";
import {modalReducer} from "./modalReducer";
import {articlesReducer} from "./articlesReducer";
import {cartReducer} from "./cartReducer";
import {wishesReducer} from "./wishesReducer";
import {filtersReducer} from "./filterReducer";
import {imagesReducer} from "./imagesReducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    products: productsReducer,
    cart: cartReducer,
    wishes: wishesReducer,
    auth: authReducer,
    modal: modalReducer,
    filters: filtersReducer,
    images: imagesReducer
})