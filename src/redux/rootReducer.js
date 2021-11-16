import {combineReducers} from "redux";
import {booksReducer} from "./booksReducer";
import {authReducer} from "./authReducer";
import {modalReducer} from "./modalReducer";
import articlesReducer from "./articlesReducer";

export const rootReducer = combineReducers({
    articles: articlesReducer,
    books: booksReducer,
    auth: authReducer,
    modal: modalReducer
})