import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';
import Main from './components/Main';
import Home from './components/Home';

import NotFound from './components/NotFound';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>, document.getElementById('app')
);