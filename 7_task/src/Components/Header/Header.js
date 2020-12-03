import React from 'react';
import Weather from '../Weather/Weather';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Business Colledge Helsinki</h1>
            <Weather />
        </div>
    );
};

export default Header;
