import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchBase } from '../actions/base';

const mapStateToProps = (state) => {
    return {base: state.base};
}

class Header extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.fetchBase();
    }

    render() {
        const { info, loading, error } = this.props.base;

        return (
            <div className="header">
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </div>
        );
    }
};

export default connect(mapStateToProps, { fetchBase })(Header);