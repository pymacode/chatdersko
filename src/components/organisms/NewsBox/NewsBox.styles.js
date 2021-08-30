import { Button } from 'components/atoms/RoundedButton/RoundedButton.styles';
import styled from 'styled-components';
import { TitleText } from 'components/atoms/Title/Title.styles';
export const ReadMoreButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

export const NewsTitle = styled(TitleText)`
  text-align: left;
  padding-left: 15px;
  font-weight: normal;
`;
export const NewsCategory = styled(TitleText)`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: left;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const NewsContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  p {
    width: 100%;
    height: 80%;
    margin: 0;
    padding: 5px;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.grey};
    text-align: center;
  }
  button {
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
`;
