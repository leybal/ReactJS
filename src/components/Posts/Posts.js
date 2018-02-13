import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './Posts.css';


export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.url = 'https://jsonplaceholder.typicode.com/posts';

    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    axios.get(this.url)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      });
  }

  render() {
    return (
      <div className='posts'>
        <ul>
          {this.state.posts.map(post =>
            <li key={post.id}>
              <Link to={`posts/${post.id}`}>{post.title}</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}