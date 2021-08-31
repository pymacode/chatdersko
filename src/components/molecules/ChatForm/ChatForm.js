import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { StyledInput } from 'components/atoms/Input/Input.styles';
const ChatBoxForm = styled.form`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ChatMessageTextarea = styled(StyledInput)`
  height: 80%;
  width: 80%;
  resize: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
  &::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledSendIcon = styled(Send)`
  color: ${({ theme }) => theme.colors.purple};
  margin-left: 30px;
`;
const ChatForm = () => {
  return (
    <ChatBoxForm>
      <ChatMessageTextarea
        as="textarea"
        name="message"
        id="message"
        placeholder="Type message..."
      />
      <StyledSendIcon onClick={() => console.log('xD')} />
    </ChatBoxForm>
  );
};

export default ChatForm;
