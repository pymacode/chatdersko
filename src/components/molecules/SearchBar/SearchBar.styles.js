import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  width: 320px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 15px;

  svg {
    position: absolute;
    left: 6px;
    width: 36px;
    height: 36px;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
