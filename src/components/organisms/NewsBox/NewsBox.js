import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'components/atoms/ContentWrapper/ContentWrapper';
import Title from 'components/atoms/Title/Title';
import { NewsContent, ReadMoreButton } from './NewsBox.styles';

const NewsBox = ({ data }) => {
  return (
    <>
      {data.length > 0
        ? data.map(({ id, title, content }) => (
            <ContentWrapper key={id}>
              <Title>{title}</Title>
              <NewsContent>
                <p>{content}</p>
                <ReadMoreButton data-key={id}>Read more</ReadMoreButton>
              </NewsContent>
            </ContentWrapper>
          ))
        : null}
    </>
  );
};

export default NewsBox;

NewsBox.propTypes = {
  data: PropTypes.array,
};
