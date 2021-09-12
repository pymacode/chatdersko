import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0px;
`;
export const UserInfoWrapper = styled.div`
  width: 100%;
  height: 25%;
`;
export const FriendsCounter = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NewMessageAnimation = keyframes`
    0%{
        transform: rotate(0);
        
    }
    10%{
        transform: rotate(10deg);    }
    20%{
        transform: rotate(-10deg);    }
    30%{
        transform: rotate(10deg);    }
    40%{
        transform: rotate(-10deg);    }
    50%{
        transform: rotate(10deg);    }
    60%{
        transform: rotate(-10deg);    }
    70%{
        transform: rotate(10deg);    }
    80%{
        transform: rotate(-10deg);    }
    90%{
        transform: rotate(10deg);    }
    100%{
        transform: rotate(0deg);    }
`;
export const NewMessagesButton = styled(NavLink)`
  width: 50px;
  height: 25px;
  border-radius: 15px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.yellow};
  animation: ${NewMessageAnimation} 2.5s 1 ease-in-out;
`;
