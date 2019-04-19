import React, { Component } from 'react';
import axios from 'axios';
import RedditDetail from '../components/RedditDetail';
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
      this.setState({ list: res })
    })
  }

  render() {
    const { list } = this.state;
    return (
      <>
      {
        list.map((detail) => (
          <RedditDetail detail={detail} key={detail.ups} />
        ))
      }
      </>
    );
  }
}

export default RedditList;
