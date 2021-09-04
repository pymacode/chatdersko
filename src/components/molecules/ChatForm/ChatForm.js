import { SendTwoTone } from '@material-ui/icons';
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
  width: 70%;
  height: 30px;
  resize: none;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 8px 5px;
  background-color: ${({ theme }) => theme.colors.navy};
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

const Button = styled.button`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border-radius: 15px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.navy};
`;
const ChatForm = () => {
  const { register, handleSubmit } = useForm();

  const { sendMessage } = useSocket();
  return (
    <ChatBoxForm onSubmit={handleSubmit(sendMessage)}>
      <ChatMessageTextarea
        as="textarea"
        name="message"
        id="message"
        placeholder="Write a message..."
        {...register('message')}
      />
      <Button type="submit">
        <SendTwoTone />
      </Button>
    </ChatBoxForm>
  );
};

export default ChatForm;
