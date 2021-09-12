import React from 'react';
import {
  SearchFriendWrapper,
  StyledSearchWrapper,
  StyledInput,
} from './SearchFriend.styles';
import { Search } from '@material-ui/icons';
const SearchFriend = () => {
  return (
    <SearchFriendWrapper>
      <StyledInput
        id="findFriends"
        name="findFriends"
        placeholder="Find friends"
        disabled
      />
      <StyledSearchWrapper>
        <Search />
      </StyledSearchWrapper>
    </SearchFriendWrapper>
  );
};

export default SearchFriend;
