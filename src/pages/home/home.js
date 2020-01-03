import React from 'react'
import PostContainer from '../../containers/postContainer/postContainer';
import './home.scss';
export default function Home() {
    return (
      <div class="home-container">
        <PostContainer title="Latest"></PostContainer>
        <PostContainer title="Tale City"></PostContainer>

        <PostContainer title="Tale City"></PostContainer>
      </div>
    );
}
