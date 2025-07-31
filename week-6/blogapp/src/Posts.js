import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  // API Call
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  // Called after component mounts
  componentDidMount() {
    this.loadPosts();
  }

  // Error Boundary
  componentDidCatch(error, info) {
    alert("An error occurred: " + error.message);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2 style={{ color: 'red' }}>Error loading posts!</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

