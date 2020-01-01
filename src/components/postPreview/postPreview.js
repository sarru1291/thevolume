import React from 'react'
import './postPreview.scss'
export default function PostPreview(props) {
    return (
        <article>
            <img src={props.feature_image}></img>
            <h1>{props.title}</h1>
            <p>{props.excerpt}</p>
        </article>
    )
}
