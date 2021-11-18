import {combineReducers} from "redux";
import {booksReducer} from "./booksReducer";
import {authReducer} from "./authReducer";
import {modalReducer} from "./modalReducer";
import {articlesReducer} from "./articlesReducer";
import {cartReducer} from "./cartReducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    books: booksReducer,
    cart: cartReducer,
    auth: authReducer,
    modal: modalReducer
})