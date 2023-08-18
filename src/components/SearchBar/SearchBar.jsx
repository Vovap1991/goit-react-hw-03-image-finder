import { AiOutlineSearch } from 'react-icons/ai';

import {
  SearchBarWrapper,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
  SearchBarSpan,
} from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchBarForm>
        <SearchBarButton type="submit">
          <AiOutlineSearch size={25} color="#0a0909" />
          <SearchBarSpan>Search</SearchBarSpan>
        </SearchBarButton>

        <SearchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
      </SearchBarForm>
    </SearchBarWrapper>
  );
};
