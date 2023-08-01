
import { Component } from 'react';
import propTypes from 'prop-types';

export default class Loader extends Component {
    render() {
        return (
            <div className="Loader" >
                {this.props.children}
            </div>
        );
    }
}

Loader.propTypes = {
    children: propTypes.node,
}