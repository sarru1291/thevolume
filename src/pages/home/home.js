import React from "react";
import PostPreviewContainer from "../../containers/postPreviewContainer/postPreviewContainer";
import "./home.scss";
export default function Home() {
  return (
    <div class="home-container">
      <PostPreviewContainer title="Latest"></PostPreviewContainer>
      <PostPreviewContainer title="Tale City"></PostPreviewContainer>
      <PostPreviewContainer title="Tale City"></PostPreviewContainer>
    </div>
  );
}
