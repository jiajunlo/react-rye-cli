import React from 'react';
import { connect } from 'react-redux';

import { fetchBase } from '../actions/base';

const mapStateToProps = (state) => {
    return {base: state.base, msg: state.msg};
}

class Main extends React.Component {

    componentWillMount() {
        this.props.fetchBase();
    }

    render() {
        const { info, loading, error } = this.props.base;

        let childrenWithProps = React.Children.map(
            this.props.children,
            (child) => React.cloneElement(child, {
                info: info
            })
        );

        return (
            <div id="wrap">
                {(!loading && !error) && (
                    <div id="main">
                        {childrenWithProps}
                    </div>
                )}
            </div>
        );
    }
};

export default connect(mapStateToProps, { fetchBase, popMsg })(Main);