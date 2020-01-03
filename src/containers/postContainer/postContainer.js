import React, { Component } from 'react'
import { getPostById } from '../../api/api';
import './postContainer.scss';
export default class PostContainer extends Component {
   
    constructor(props) {
        super(props);
        this.post_content_ref = React.createRef();
        this.state = {
            post: null
        }
    }
   async componentDidMount() {
       let post = await getPostById(this.props.match.params.id);
       this.setState({ post });
       this.post_content_ref.current.innerHTML = post.html;
   }
    render() {
        console.log(this.state.post);
        
        return (
            <div className="post-container">
                <div ref={this.post_content_ref}/>
            </div>
        )
    }
}
