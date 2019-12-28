import React from 'react';
import './sideBar.scss';
import NavItem from './navItem/navItem';

export default function sideBar() {
    return (
        <div className="sidebar">
            <div><a href="#"><NavItem>Home</NavItem></a></div>
            <div><a href="#"><NavItem>Technology</NavItem></a></div>
            <div><a href="#"><NavItem>Short stories</NavItem></a></div>
            <div><a href="#"><NavItem>Politics</NavItem></a></div>
            <div className="footer">copyright 2019</div>
        </div>
    )
}
