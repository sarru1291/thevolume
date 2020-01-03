import React, { Component } from "react";
import "./postContainer.scss";
import PostPreview from "../../components/postPreview/postPreview";
import { getPosts } from "../../api/api";
export default class PostContainer extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    let posts = await getPosts();
    this.setState({
      posts: [...posts]
    });
  }
  render() {
    console.log(this.state.posts);

    return (
      <div className="post-container">
        <h2 className="post-container-title">{this.props.title}</h2>
        {this.state.posts.map(post => (
          <PostPreview
            title={post.title}
            excerpt={post.custom_excerpt}
            feature_image={post.feature_image}
            slug={post.slug}
            
          ></PostPreview>
        ))}
      </div>
    );
  }
}
