import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {authReducer} from "./authReducer";
import {modalReducer} from "./modalReducer";
import {articlesReducer} from "./articlesReducer";
import {cartReducer} from "./cartReducer";
import {wishesReducer} from "./wishesReducer";
import {sidebarReducer} from "./sidebarReducer";
import {imagesReducer} from "./imagesReducer";
import {langReducer} from "./langReducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    products: productsReducer,
    cart: cartReducer,
    wishes: wishesReducer,
    auth: authReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
    images: imagesReducer,
    lang: langReducer
})