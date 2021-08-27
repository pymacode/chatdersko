import React from 'react';
import CircleButton from 'components/atoms/CircleButton/CircleButton';
import { ExitToApp } from '@material-ui/icons';
import { ButtonsWrapper } from './HeaderButtons.styles';
import { useAuth } from 'hooks/useAuth';
const HeaderButtons = () => {
  const auth = useAuth();
  return (
    <ButtonsWrapper>
      <CircleButton>
        <ExitToApp onClick={auth.signOut} />
      </CircleButton>
    </ButtonsWrapper>
  );
};

export default HeaderButtons;
