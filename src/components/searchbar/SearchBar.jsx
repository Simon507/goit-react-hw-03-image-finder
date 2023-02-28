import { StyledComponent } from 'styled-components';

import { RiFindReplaceLine } from 'react-icons/ri';

import {
  FindSection,
  SearchForm,
  SearchFormBtn,
  SearchInput,
} from './SearchBar.styles';

export const SearchBar = () => {
  return (
    <FindSection class="searchbar">
      <SearchForm class="form">
        <SearchFormBtn type="submit" class="button">
          <RiFindReplaceLine></RiFindReplaceLine>
        </SearchFormBtn>

        <SearchInput
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </FindSection>
  );
};
