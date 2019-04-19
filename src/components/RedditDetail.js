import React from 'react';
import PropTypes from 'prop-types';

const RedditDetail = ({ detail }) => {
  console.log('detail ==>', detail);
  const { 
    author,
    url,
    title,
    permalink,
    subreddit_name_prefixed,
    thumbnail,
  } = detail;
  console.log('url, title ==>', url, title);
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4>{subreddit_name_prefixed}</h4>
        <img src={thumbnail} alt="img"/>
      </div>
    </>
  )
}

export default RedditDetail;
