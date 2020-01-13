import React from "react";
import PostPreviewContainer from "../../containers/postPreviewContainer/postPreviewContainer";
import "./worldWindow.scss";
export default function WorldWindow() {
    return (
        <div class="world-window-container">
            <PostPreviewContainer title="World Window" tag="world-window"></PostPreviewContainer>
        </div>
    );
}
