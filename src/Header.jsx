import React from 'react';
import './App.css';
import SVG from './react.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={SVG} alt="logo"/>
            <h1>Google Keep App Clone</h1>
            
        </div>
    )
}

export default Header;
