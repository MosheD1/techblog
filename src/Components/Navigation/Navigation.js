import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    return (
        <nav className='navbar sticky'>
            <li>
                <a onClick={() => props.onRouteChange('signin')}>SignOut</a>
            </li>
            <li>
                <a onClick={() => props.onRouteChange('register')}>Register</a>
            </li>
        </nav>
    );
}

export default Navigation;