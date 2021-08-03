import React from 'react';
import CircleButton from 'components/atoms/CircleButton/CircleButton';
import { ArrowDownward, MessageOutlined } from '@material-ui/icons';
import { ButtonsWrapper } from './HeaderButtons.styles';
const HeaderButtons = () => {
  return (
    <ButtonsWrapper>
      <CircleButton>
        <MessageOutlined />
      </CircleButton>
      <CircleButton>
        <ArrowDownward />
      </CircleButton>
    </ButtonsWrapper>
  );
};

export default HeaderButtons;

HeaderButtons.propTypes = {};
