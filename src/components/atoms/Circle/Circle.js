import React from 'react';
import PropTypes from 'prop-types';
import { CircleDiv } from './Circle.styles';

const defaultAvatarUrl =
  'https://www.pngfind.com/pngs/m/42-428449_anonymous-avatar-face-book-hd-png-download.png';

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
