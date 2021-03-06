import React, { Component } from 'react';
import Layout from "../components/Layout.js";
import fetch from 'isomorphic-unfetch';
import { Config } from '../config';

class PostIndex extends Component {

  static async getInitialProps() {
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const posts = await postsRes.json();
    return {
      posts
    }
  }

  render() {
    const {posts} = this.props;
    return (
      <Layout>
        <h1>Post Index</h1>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              {post.title.rendered}
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
};

export default PostIndex;