import React, { Component } from 'react';
import axios from 'axios';

import sampleData from '../sampledata/data';

const fetchRedditPosts = () => {
  axios.get('/.netlify/functions/' + 'reddit')
  .then(res => { console.log('res ==>', res) })
  .catch(err => { console.log('err =>', err) })
}

const fakeFetchRedditPosts = () => {
  const parsedData = JSON.parse(sampleData)
  return Promise.resolve(parsedData.data);
}


class RedditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    // fetchRedditPosts();
    fakeFetchRedditPosts()
    .then((res) => {
      console.log('res ==>', res);
      this.setState({ list: res })
    })
    console.log('this.setState ==>', this.setState);
  }

  render() {
    return (
      <>
      <h1>hi</h1>
      </>
    );
  }
}

export default RedditList;
