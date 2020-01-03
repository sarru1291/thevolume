import React, { Component } from "react";
import "./postPreviewContainer.scss";
import PostPreview from "../../components/postPreview/postPreview";
import { getPosts } from "../../api/api";
export default class PostPreviewContainer extends Component {
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
      
    return (
      <div className="post-preview-container">
        <h2 className="post-preview-container-title">{this.props.title}</h2>
        {this.state.posts.map(post => (
          <PostPreview
            title={post.title}
            excerpt={post.custom_excerpt}
            feature_image={post.feature_image}
            reading_time={post.reading_time}
            published_at={post.published_at}
            tags={post.tags}
            id={post.id}
          ></PostPreview>
        ))}
      </div>
    );
  }
}
