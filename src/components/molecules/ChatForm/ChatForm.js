import { Send } from '@material-ui/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { StyledInput } from 'components/atoms/Input/Input.styles';
import { useSocket } from 'hooks/useSocket';
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
`;

const Button = styled.button`
  margin-left: 30px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};
`;
const ChatForm = () => {
  const { register, handleSubmit } = useForm();

  const { sendMessage } = useSocket();

  const handleSendMessage = () => {};
  return (
    <ChatBoxForm onSubmit={handleSubmit(sendMessage)}>
      <ChatMessageTextarea
        as="textarea"
        name="message"
        id="message"
        placeholder="Type message..."
        {...register('message')}
      />
      <Button type="submit">
        <StyledSendIcon />
      </Button>
    </ChatBoxForm>
  );
};

export default ChatForm;
