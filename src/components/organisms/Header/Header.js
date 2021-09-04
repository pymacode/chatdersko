import React from 'react';
import UserInfo from 'components/molecules/UserInfo/UserInfo';
import { HeaderWrapper, HeaderUserInfo } from './Header.styles';
import { useAuth } from 'hooks/useAuth';
import Title from 'components/atoms/Title/Title';

const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWidthChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWidthChange);

    return function () {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);
  const auth = useAuth();
  return (
    <HeaderWrapper>
      <Title>Chatdersko</Title>
      <HeaderUserInfo>
        {width < 1366 ? (
          <UserInfo isSmall user={auth.user} />
        ) : (
          <UserInfo user={auth.user} />
        )}
      </HeaderUserInfo>
    </HeaderWrapper>
  );
};

export default Header;
