import React from 'react';
import './header.scss';
import Hbar from './hbar/hbar';

export default function Header(props) {
    return (
        <div className="header">
            {/* <Hbar></Hbar> */}
            <div className="hamburger" ><i class="fas fa-bars"></i></div>
            <h1><span>The</span>Volume</h1>
        </div>
    )
}
