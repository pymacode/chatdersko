import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
export const SearchFriendWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  position: relative;
  margin-top: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.navy};
`;

export const StyledInput = styled(Input)`
  width: 80%;
  height: 30px;
  padding: 5px;
  margin-left: 5px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.navy};
`;

export const StyledSearchWrapper = styled.div`
  width: 20%;
  height: 30px;
  border-radius: 0px 15px 15px;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.yellow};
  position: absolute;
  right: 15px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
