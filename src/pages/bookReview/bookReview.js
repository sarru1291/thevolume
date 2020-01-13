import React from "react";
import PostPreviewContainer from "../../containers/postPreviewContainer/postPreviewContainer";
import "./bookReview.scss";
export default function BookReview(props) {
    
    return (
        <div class="book-review-container">
            <PostPreviewContainer title="Book Review" tag="book-review"></PostPreviewContainer>
        </div>
    );
}
