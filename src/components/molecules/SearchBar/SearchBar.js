import React from 'react';
import Input from 'components/atoms/Input/Input';
import { Search } from '@material-ui/icons';
import { SearchBarWrapper } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <Search />
      <Input name="name" id="name" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
