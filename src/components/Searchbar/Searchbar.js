import styles from "./Searchbar.module.css";
import React, { Component } from "react";
import PropTypes from 'prop-types';



class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset() {
    this.setState({ query: "" });
  }

  render() {
    const { query } = this.state
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>search</span>
          </button>

          <input
            name='query'
            value={query}
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}


SearchBar.propTypes = {
  query: PropTypes.string,
};

export default SearchBar;
