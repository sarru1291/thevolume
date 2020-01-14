import React, { Component } from "react";
import "./postPreviewContainer.scss";
import PostPreview from "./postPreview/postPreview";
import { getPosts, getPostsByLimit } from "../../api/api";
import Spinner from "../../components/spinner/spinner";
import LoadMore from "../../components/loadMore/loadMore";
import setting_data from "../../assets/config/setting_data.json";

export default class PostPreviewContainer extends Component {
  state = {
    posts: [],
    isLoaded: false,
    postUnLoaded: 0,
    postLoad: 0
  };
  async componentDidMount() {
    console.log(this.props.tag);
    let tag = this.props.tag;
    // let posts = await getPostsByLimit(5);
    let posts = await getPosts();
    console.log(posts);
    const page_titles = setting_data.page_titles;
    // let page_slug = null;
    let filtered_posts = [];
    let k = 0;
    for (let j = 0; j < posts.length; j++) {
      for (let i = 0; i < posts[j].tags.length; i++) {
        if (posts[j].tags[i].slug == tag) {
          filtered_posts[k] = posts[j];
          k++;
        }
      }
    }
    let postUnloaded;
    if (filtered_posts.length < 5) {
      postUnloaded = 0;
    } else {
      postUnloaded = filtered_posts.length - 5;
    }
    this.setState({
      posts: [...filtered_posts],
      isLoaded: true,
      postUnloaded: postUnloaded,
      postLoad: 5
    });
  }
  loadMore = () => {
    let postUnloaded = this.state.postUnloaded;
    postUnloaded = postUnloaded - 5;
    if (postUnloaded < 1) {
      postUnloaded = 0;
    } else {
      postUnloaded = postUnloaded - 5;
    }
    let postLoad = this.state.postLoad;
    postLoad = postLoad + 5;
    this.setState({ postUnloaded, postLoad });
  };
  
  render() {
    var spinner;
    var posts;
    if (this.state.isLoaded) {
      spinner = null;

      if (this.state.posts == 0) {
        posts = <div className="no-content">No Content Available</div>;
      } else {
        posts = this.state.posts
          .slice(0, this.state.postLoad)
          .map(post => (
            <PostPreview
              title={post.title}
              excerpt={post.custom_excerpt}
              feature_image={post.feature_image}
              reading_time={post.reading_time}
              published_at={post.published_at}
              tags={post.tags}
              id={post.id}
            ></PostPreview>
          ));
      }
    } else {
      spinner = <Spinner></Spinner>;
    }

    return (
      <div className="post-preview-container">
        <h2 className="post-preview-container-title">{this.props.title}</h2>
        {spinner}
        {posts}
        {this.state.postUnloaded > 0 ? (
          <LoadMore loadMore={this.loadMore}></LoadMore>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
