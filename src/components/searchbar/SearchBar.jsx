import { RiFindReplaceLine } from 'react-icons/ri';
import { Component } from 'react';

import {
  FindSection,
  SearchForm,
  SearchFormBtn,
  SearchInput,
} from './SearchBar.styles';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    target: '',
    collections: null,
  };
  handleChange = ({ target }) => {
    this.setState({ target: target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.target);
  };

  render() {
    return (
      <FindSection className="searchbar">
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit" className="button">
            <RiFindReplaceLine></RiFindReplaceLine>
          </SearchFormBtn>

          <SearchInput
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            target={this.state.value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </FindSection>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
