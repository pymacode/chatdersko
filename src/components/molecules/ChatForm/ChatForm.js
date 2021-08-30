import { Send } from '@material-ui/icons';
import Input from 'components/atoms/Input/Input';
import React from 'react';
import styled from 'styled-components';
import { StyledInput } from 'components/atoms/Input/Input.styles';
const ChatBoxForm = styled.form`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ChatMessageTextarea = styled(StyledInput)`
  height: 80%;
  width: 50%;
  resize: none;
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
const SendButton = styled.button`
  width: 100px;
  height: 30px;
  margin-left: 30px;
  border: none;
  border-radius: 15px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.default};
  color: ${({ theme }) => theme.colors.black};
`;
const ChatForm = () => {
  return (
    <ChatBoxForm>
      <ChatMessageTextarea
        as="textarea"
        name="message"
        id="message"
        placeholder="Wiadmość..."
      />
      <SendButton>Send</SendButton>
    </ChatBoxForm>
  );
};

export default ChatForm;
