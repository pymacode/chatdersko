import Input from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;

export const StyledInput = styled(Input)`
  width: 90%;
  height: 20px;
  padding: 5px;
  margin: 0 5px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.navy};
`;

export const FormButton = styled.button`
  width: 50px;
  height: 25px;
  border: none;
  border-radius: 5px;
  padding: 0;
  font-size: 12px;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.navy};
`;

export const SingleFormWrapper = styled.form`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledFileInput = styled.div`
  width: 125px;
  height: 25px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  margin: 0 5px;
`;

export const StyledFileName = styled.span`
  width: 100px;
  height: 25px;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
