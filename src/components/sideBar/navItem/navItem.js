import React from 'react';
import './navItem.scss';

export default function navLink(props) {
    return (
        <div className="nav-item">
            {props.children}
        </div>
    )
}
