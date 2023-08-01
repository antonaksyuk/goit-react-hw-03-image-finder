import { Component } from 'react';
import '../../styles.css';
import propTypes from 'prop-types'

export default class Modal extends Component { 

    onImageClick = event => {
        if (event.target.nodeName === 'IMG') {
            this.props.toggle();
        }
    };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.toggle();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggle();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

      render() { 
          return (
              <div onClick={this.handleOverlayClick} className="Overlay">
                  <div className="Modal">
                      <img onClick={this.onImageClick} src={this.props.prop} alt={this.props.prop2} />
                  </div>
              </div>
          );
    }
}

Modal.propTypes = {
    toggle: propTypes.func,
    prop: propTypes.string,
    prop2: propTypes.string,
}