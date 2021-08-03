import React from 'react';
import PropTypes from 'prop-types';
import { CircleDiv } from './Circle.styles';

const defaultAvatarUrl =
  'https://images.unsplash.com/photo-1513152697235-fe74c283646a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1417&q=80';

const Circle = ({ imgUrl = defaultAvatarUrl }) => {
  return (
    <CircleDiv>
      <img src={imgUrl} alt="Profile image" />
    </CircleDiv>
  );
};

export default Circle;

Circle.propTypes = {
  imgUrl: PropTypes.string,
};
