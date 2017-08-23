import React from 'react';

export default class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="container">
                <div className="container-header">
                    <h3 className="title">404</h3>
                </div>
            </div>
        );
    }
};