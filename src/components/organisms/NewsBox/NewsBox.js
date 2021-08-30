import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'components/atoms/ContentWrapper/ContentWrapper';
import {
  NewsContent,
  ReadMoreButton,
  NewsTitle,
  NewsCategory,
} from './NewsBox.styles';

const NewsBox = ({ data }) => {
  return (
    <>
      {data.length > 0
        ? data.map(({ id, title, content, category }) => (
            <ContentWrapper key={id}>
              <NewsTitle>{title}</NewsTitle>
              <NewsCategory>{category}</NewsCategory>
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
