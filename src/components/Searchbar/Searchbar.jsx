import { Component } from 'react';
import '../../styles.css';
import { FiSearch } from "react-icons/fi";
import propTypes from 'prop-types';

export default class SerchBar extends Component { 
  state = {
    query: '',
  }

  handleFormSubmit = (e) => { 
    e.preventDefault();
    this.props.query(this.state.query);
    this.setState({ query: '' });
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value.toLowerCase() })
  };

    render() {
      return (
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleFormSubmit}>
            <button type="submit" className="SearchForm-button">
              <FiSearch size={'1.5em'}/>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </form>
        </header>
      );
    }
}

SerchBar.propTypes = {
  query: propTypes.func,
}