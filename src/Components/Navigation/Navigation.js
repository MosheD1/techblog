import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='navbar sticky'>
            <li>
                <a href='#'>SignOut</a>
            </li>
            <li>
                <a href='#'>Register</a>
            </li>
        </nav>
    );
}

export default Navigation;