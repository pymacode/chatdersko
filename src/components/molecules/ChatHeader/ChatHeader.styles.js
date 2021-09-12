import styled from 'styled-components';
import { SingleFriend } from 'components/atoms/FriendsListBox/FriendsListBox.styles';

export const StyledSingleFriend = styled(SingleFriend)`
  padding: 0;
  @media (orientation: landscape) and (max-height: 628px) {
    img {
      display: none;
    }
  }
`;

export const ChatBoxHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.yellowRGB}0.2)`};
  background-color: ${({ theme }) => `${theme.colors.navyRGB}0.8)`};
  align-items: center;
  justify-content: center;

  @media (min-width: 1366px) {
    background-color: ${({ theme }) => theme.colors.lightNavy};
    border: none;
    padding-bottom: 5px;
  }
`;
