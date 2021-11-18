import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {authReducer} from "./authReducer";
import {modalReducer} from "./modalReducer";
import {articlesReducer} from "./articlesReducer";
import {cartReducer} from "./cartReducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
    modal: modalReducer
})