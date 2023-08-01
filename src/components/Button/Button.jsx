
import { Component } from 'react';
import '../../styles.css'
import propTypes from 'prop-types'

export default class Button extends Component {
    render() {
        return (
            <div className='Button-cotainer'>
                <button onClick={this.props.click} className='Button' type='button'>LOAD MORE</button>
            </div>
        );
    }
}


Button.propTypes = {
      click: propTypes.func,
}