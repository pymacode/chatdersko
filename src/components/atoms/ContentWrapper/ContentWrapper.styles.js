import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 25px;
  position: relative;

  margin-top: 10px;

  background-color: ${({ theme }) => theme.colors.white};
`;
