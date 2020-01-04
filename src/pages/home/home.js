import React from "react";
import PostPreviewContainer from "../../containers/postPreviewContainer/postPreviewContainer";
import "./home.scss";
export default function Home() {
  return (
    <div class="home-container">
      <PostPreviewContainer title="Latest"></PostPreviewContainer>
    </div>
  );
}
