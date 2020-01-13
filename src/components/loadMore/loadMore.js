import React from 'react'
import './loadMore.scss'
export default function LoadMore(props) {
    return (
        <div className="load-more">
            <button onClick={props.loadMore}>Load More</button>
        </div>
    )
}
