import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper.styles';
import NewsBox from 'components/organisms/NewsBox/NewsBox';
import Title from 'components/atoms/Title/Title';
const query = `{
    allNews {
      id
      title
      content
      category
      image {
        url
      }
    }
  }`;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .post(
        'https://graphql.datocms.com/',
        { query },
        {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        setArticles(data.allNews);
      })
      .catch(() => {
        setError('Failed while loading!');
      });
  }, []);
  return (
    <ViewWrapper>
      <Title isBig>News</Title>
      {error ? (
        <Title>{error}</Title>
      ) : articles.length > 0 ? (
        <NewsBox data={articles} />
      ) : (
        <Title>Loading...</Title>
      )}
    </ViewWrapper>
  );
};

export default NewsSection;
