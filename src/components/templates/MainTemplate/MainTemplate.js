import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Components } from './MainTemplate.styles';
import Header from 'components/organisms/Header/Header';
import NewsSection from '../NewsSection/NewsSection';
import Navigation from 'components/organisms/Navigation/Navigation';
const MainTemplate = ({ children }) => {
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
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Components>
        {children}
        {width < 1366 ? null : <NewsSection />}
      </Components>
    </Wrapper>
  );
};

export default MainTemplate;

MainTemplate.propTypes = {
  children: PropTypes.any,
};
