import { Component } from 'react';
import '../../styles.css';
import propTypes from 'prop-types'

export default class ImageGallery extends Component { 
    render() { 
        return (
            <ul className="ImageGallery">
                {this.props.children}
            </ul>
        );
    }
}

ImageGallery.propTypes = {
    children: propTypes.node,
}