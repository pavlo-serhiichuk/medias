import React from 'react';
import {render} from 'react-dom';
import './index.css';
import AppContainer from './components/App/AppContainer';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger";

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk,
        logger
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

window.store = store

render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </Router>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
