import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios';

import './Post.css';


class Post extends Component {
  constructor(props) {
    super(props);

    const { history } = this.props
    this.url = 'https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id;

    this.backToPreviousUrl = history.goBack;

    this.state = {
      post: {}
    };
  }

  componentWillMount() {
    axios.get(this.url)
      .then(res => {
        const post = res.data;
        this.setState({ post: post });
      });
  }

  render() {
    return (
      <div className='post'>
        <button onClick={this.backToPreviousUrl}>Previous page</button>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.body}</p>
      </div>
    );
  }
}


export default withRouter(Post);