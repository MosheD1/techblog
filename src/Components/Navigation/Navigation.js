import React from 'react';
import './Navigation.css';

const Navigation = ({route, onRouteChange}) => {
    if(route === 'home') {
        return (
            <nav className='navbar sticky'>
                <li>
                    <a href='#id' onClick={() => onRouteChange('register')}>SignOut</a>
                </li>
            </nav>
        );
    } else {
        return (
            <nav className='navbar sticky'>
                <li>
                    <a href='#id' onClick={() => onRouteChange('signin')}>SignIn</a>
                </li>
                <li>
                    <a href='#id' onClick={() => onRouteChange('register')}>Register</a>
                </li>
            </nav>
        );
    }
    
}

export default Navigation;