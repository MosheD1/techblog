import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    return (
        <nav className='navbar sticky'>
            <li>
                <a href='#id' onClick={() => props.onRouteChange('signin')}>SignOut</a>
            </li>
            <li>
                <a href='#id' onClick={() => props.onRouteChange('register')}>Register</a>
            </li>
        </nav>
    );
}

export default Navigation;