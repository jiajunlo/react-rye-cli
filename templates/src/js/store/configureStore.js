import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

export const history = createBrowserHistory();

export const store = createStore(
    reducers,
    applyMiddleware(thunk, routerMiddleware(history))
);