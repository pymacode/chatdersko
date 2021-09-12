import styled from 'styled-components';

export const ChatBoxMessages = styled.div`
  width: 100%;
  height: 75%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${({ theme }) => `${theme.colors.navyRGB}0.8)`};
  //hide scrollbar
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  //hide scrollbar -- end

  @media screen and (min-width: 1366px) {
    height: 90%;
  }
`;

export const MessageBox = styled.div`
  position: relative;
  width: 150px;
  max-width: 150px;
  min-height: 40px;
  border-radius: 15px;
  margin: 5px 15px;
  padding: 5px 10px;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme, isSender }) =>
    isSender
      ? `${theme.colors.purpleRGB}0.5)`
      : `${theme.colors.purpleRGB}0.7)`};
  color: ${({ theme, isSender }) =>
    isSender ? 'rgba(255, 255, 255, 0.7)' : theme.colors.navy};
  align-self: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
`;

export const MessageSender = styled.div`
  position: absolute;
  top: -15px;
  left: 10px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.yellowRGB}0.5)`};
`;

export const NoMessagesText = styled.p`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.yellow};
`;
