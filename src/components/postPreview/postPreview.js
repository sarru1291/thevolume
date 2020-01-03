import React from "react";
import "./postPreview.scss";
import { NavLink} from 'react-router-dom';
export default function PostPreview(props) {
  console.log(props);
  
  return (
    <NavLink to="/" exact style={{ textDecoration: 'none' }}>
    <article>
      <img src={props.feature_image}></img>
      <div>
        <h1>{props.title}</h1>
        <p>{props.excerpt}</p>
        <p>2 january, 2019 12:12am</p>
      </div>
      </article>
    </NavLink>
  );
}
