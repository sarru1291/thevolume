import React from "react";
import "./postPreview.scss";
import { NavLink } from "react-router-dom";
import setting_data from "../../../assets/config/setting_data.json";
export default function PostPreview(props) {
  // console.log(props.tags);
  // console.log(setting_data.page_titles);

  const pub_time = new Date(props.published_at);
  var options = {
    timeZone: "Asia/Kolkata",
    timeZoneName: "short",
    dateStyle: "medium",
    timeStyle: "short",
    calendar: "indian",
    year: "numeric",
    month: "short"
  };
  const page_titles = setting_data.page_titles;
  let page_slug = null;
  for (let i = 0; i < props.tags.length; i++) {
    for (let j = 0; j < page_titles.length; j++) {
      if (props.tags[i].slug == page_titles[j]) {
        page_slug = page_titles[j];
        break;
      }
    }
  }
  const link = "/" + page_slug + "/" + props.slug;
  return (
    <NavLink to={link} exact style={{ textDecoration: "none" }} target="_blank">
      <article>
        <img src={props.feature_image}></img>
        <div>
          <h1>{props.title}</h1>
          <p className="excerpt">{props.excerpt}</p>
          <p className="time">
            <p>{pub_time.toLocaleTimeString("en-US", options)}</p>{" "}
            <p>
              <i class="fas fa-clock"></i>&nbsp;{props.reading_time}
              min
            </p>
          </p>
        </div>
      </article>
    </NavLink>
  );
}
