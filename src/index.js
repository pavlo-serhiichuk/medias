import React from 'react';
import thunk from "redux-thunk";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {rootReducer} from "./redux/rootReducer";
import {createLogger} from 'redux-logger';
import {BrowserRouter as Router} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import './index.css';

import AppContainer from './components/App/AppContainer';

const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: true
});

const store = createStore(
    rootReducer,
    {}, //initialState
    composeWithDevTools(
        /* logger must be the last middleware in chain to log actions */
        applyMiddleware(thunk, logger)
    )
);

window.store = store

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
