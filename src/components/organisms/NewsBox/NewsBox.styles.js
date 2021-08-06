import RoundedButton from 'components/atoms/RoundedButton/RoundedButton';
import styled from 'styled-components';

export const ReadMoreButton = styled(RoundedButton)`
  font-size: ${({ theme }) => theme.fontSize.s};
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

export const NewsContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* position: relative; */

  p {
    width: 80%;
    height: 80%;
    margin: 0;
    padding: 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
  button {
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
`;
