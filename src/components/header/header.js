import React,{useState} from 'react';
import './header.scss';
import Hbar from './hbar/hbar';

export default function Header(props) {
    console.log(window.innerWidth);
    
const [showHbar, setshowHbar] = useState(false)
    return (
        <div className="header">
            {showHbar ? <Hbar showHbar={showHbar} hideHbar={() => setshowHbar(false)}></Hbar>:<span/>}
            <div className="hamburger" onClick={() => setshowHbar(true)}><i class="fas fa-bars"></i></div>
            <h1><span>The</span>Volume</h1>
        </div>
    )
}
