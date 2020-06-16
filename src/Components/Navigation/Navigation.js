import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='navbar sticky'>
            <li>
                <a href='#id'>SignOut</a>
            </li>
            <li>
                <a href='#id'>Register</a>
            </li>
        </nav>
    );
}

export default Navigation;