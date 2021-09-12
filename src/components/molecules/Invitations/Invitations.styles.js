import styled from 'styled-components';

export const InvitationsWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  overflow-y: scroll;
  //hide scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  //hide scrollbar -- end
`;

export const InvitationCard = styled.div`
  width: 90%;
  min-height: 60px;
  border-radius: 15px;
  background-color: ${({ theme }) => `${theme.colors.purpleRGB}0.3)`};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
`;
export const UserInfoWrapper = styled.div`
  width: 50%;
  height: 100%;
  font-size: 5px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

export const RoundedButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isDecline }) =>
    isDecline ? theme.colors.navy : theme.colors.yellow};
  color: ${({ theme, isDecline }) =>
    isDecline ? theme.colors.yellow : theme.colors.navy};
  svg {
    width: 15px;
    height: 15px;
  }
`;
