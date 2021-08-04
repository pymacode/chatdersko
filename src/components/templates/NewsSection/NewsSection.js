import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NewsSectionWrapper } from './NewsSection.styles';
import NewsBox from 'components/organisms/NewsBox/NewsBox';
import Title from 'components/atoms/Title/Title';
const query = `{
    allNews {
      id
      title
      content
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
        setTimeout(() => setArticles(data.allNews), 3000);
      })
      .catch(() => {
        setError('Failed while loading!');
      });
  }, []);
  return (
    <NewsSectionWrapper>
      <Title isBig>News</Title>
      {error ? (
        <Title>{error}</Title>
      ) : articles.length > 0 ? (
        <NewsBox data={articles} />
      ) : (
        <Title>Loading...</Title>
      )}
    </NewsSectionWrapper>
  );
};

export default NewsSection;