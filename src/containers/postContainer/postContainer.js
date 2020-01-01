import React, { Component } from "react";
import "./postContainer.scss";
import PostPreview from "../../components/postPreview/postPreview";
import PostContainerTitle from "../../components/postContainerTitle/postContainerTitle";
import { getPosts } from '../../api/api';
export default class PostContainer extends Component {
    state = {
        posts:[]
    }
  async componentDidMount() {
      let posts =await getPosts();
      this.setState({
          posts:[...posts]
      })
  }
    render() {
        console.log(this.state.posts);
        
    return (
        <div className="post-container">
            
        <div className="post-container-title">
          <PostContainerTitle title="HOME"></PostContainerTitle>
            </div>
            {this.state.posts.map((post) => (
                <div className="post-preview">
              <PostPreview
                title={post.title}
                        excerpt={post.custom_excerpt}
                        feature_image={post.feature_image}
                        id={post.id}
              ></PostPreview>
                </div>
            ))}
      </div>
    );
  }
}
