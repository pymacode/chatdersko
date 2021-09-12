import styled from 'styled-components';

export const ChatBoxWrapper = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1366px) {
    height: 100%;
    width: 70%;
  }
`;
