import { RiFindReplaceLine } from 'react-icons/ri';

import {
  FindSection,
  SearchForm,
  SearchFormBtn,
  SearchInput,
} from './SearchBar.styles';
import PropTypes from 'prop-types';

let findValue = '';

export const SearchBar = ({ onSubmit }) => {
  return (
    <FindSection className="searchbar">
      <SearchForm
        className="form"
        onSubmit={e => {
          e.preventDefault();
          onSubmit(findValue);
        }}
      >
        <SearchFormBtn type="submit" className="button">
          <RiFindReplaceLine></RiFindReplaceLine>
        </SearchFormBtn>

        <SearchInput
          onChange={e => {
            findValue = e.target.value;
          }}
          className="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </FindSection>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
