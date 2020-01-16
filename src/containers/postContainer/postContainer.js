import React, { Component } from "react";
import { getPostBySlug } from "../../api/api";
import "./postContainer.scss";
import Spinner from "../../components/spinner/spinner";
export default class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.post_content_ref = React.createRef();
    this.state = {
      post: "",
      options: {
        timeZone: "Asia/Kolkata",
        timeZoneName: "short",
        dateStyle: "medium",
        timeStyle: "short",
        calendar: "indian",
        year: "numeric",
        month: "short"
      },
      pub_time: "",
      isLoaded: false
    };
  }
  componentDidMount() {
    getPostBySlug(this.props.match.params.slug)
      .then(post => {
        let pub_time = new Date(post.published_at);
        pub_time = pub_time.toLocaleTimeString("en-US", this.state.options);
        this.setState({ post, pub_time, isLoaded: true });
        console.log(this.state.post.authors[0].name);
      })
      .catch(err => {
        console.log("error");
      });
    //    let post = await getPostById(this.props.match.params.id);
    //    this.setState({ post });
    //    this.post_content_ref.current.innerHTML = post.html;
  }
  render() {
    var spinner;
    if (this.state.isLoaded) {
      spinner = null;
    } else {
      spinner = <Spinner></Spinner>;
    }
    console.log(this.state.post);
    
    return (
      <div className="post-container">
        {spinner}
        <div className="post-info">
          <h1 className="post-title">{this.state.post.title}</h1>
          <p className="excerpt">
            <i>{this.state.post.custom_excerpt}</i>
          </p>
          <p className="author">
            {/* <img
              src={this.state.post.authors[0].profile_image}
              className="author-img"
            ></img>
            {this.state.post.authors[0].name} */}
            <i class="fa fa-user">&nbsp;Sarvottam Kumar</i>
          </p>
          <p className="time">
            <p>
              <i class="fas fa-clock"></i>&nbsp;{this.state.post.reading_time}
              min &nbsp;&nbsp;&nbsp;&nbsp; {this.state.pub_time}
            </p>
          </p>
        </div>
        <div className="post-content">
          <img src={this.state.post.feature_image} alt=""/>
          <p dangerouslySetInnerHTML={{ __html: this.state.post.html }} />
          <hr />
        </div>
      </div>
    );
  }
}
