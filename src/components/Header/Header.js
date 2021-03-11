import React from 'react';
import './Header.css';
import plLogo from '../../Photo/pllogo.png';
const Header = () => {

    return (
        <div className="main-header">
        <img className="league-title" src={plLogo} alt=""/>
        </div>
    );
};

export default Header;