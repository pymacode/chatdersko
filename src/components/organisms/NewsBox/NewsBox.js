import React from 'react';
import PropTypes from 'prop-types';
import ContentWrapper from 'components/atoms/ContentWrapper/ContentWrapper';
import Title from 'components/atoms/Title/Title';
import { NewsContent, ReadMoreButton } from './NewsBox.styles';

const NewsBox = ({ data }) => {
  return (
    <>
      {data.length > 0
        ? data.map(({ id, title, content, image = null }) => (
            <ContentWrapper key={id}>
              <Title>{title}</Title>
              <NewsContent>
                <p>{content}</p>
                <div>
                  {image ? <img src={image.url} alt="article img" /> : null}
                  <ReadMoreButton>Read more</ReadMoreButton>
                </div>
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
