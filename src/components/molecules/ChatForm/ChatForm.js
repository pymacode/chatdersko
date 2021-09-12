import { SendTwoTone } from '@material-ui/icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSocket } from 'hooks/useSocket';
import { ChatBoxForm, ChatMessageTextarea, Button } from './ChatForm.styles';
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
