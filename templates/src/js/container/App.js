import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import Contact from '../components/Contact';
import About from '../components/About';
import NotFound from '../components/NotFound';

export default class App extends React.Component {
    render() {
        return (
            <div id="wrap">
                <Header />
                <div id="main">
                    <Switch>
                        <Route exact path="/" component={Home}  />
                        <Route path="/about" component={About}  />
                        <Route path="/contact" component={Contact}  />
                    </Switch>
                </div>
            </div>
        );
    }
};