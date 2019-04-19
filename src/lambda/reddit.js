// 'use strict';
const Snoowrap = require('snoowrap');
require('dotenv').config();


const getNewPosts = (event, context) => {
  const r = new Snoowrap({
    userAgent: event.headers['user-agent'],
    clientId: process.env.REACT_APP_REDDIT_CLIENT_ID,
    clientSecret: process.env.REACT_APP_REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REACT_APP_REDDIT_REFRESH_TOKEN,
  });
  return r.getMe().getUpvotedContent().fetchMore({ amount: 10 })
};


export async function handler(event, context) {
  try {
    const response = await getNewPosts(event);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify(response)
    }
  }
  catch (err) {
    console.log('Error inside reddit.js lambda handler', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    };
  }
}
