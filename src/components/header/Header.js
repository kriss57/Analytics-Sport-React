import React from 'react';
import logo from '../../assets/images/logo.png'

import './header.css'

const Header = () => {
    return (
        <div className='Header' style={{ backgroundColor: 'black' }}  >
            <img src={logo} alt="logo sportsee" />
            <nav>
                <ul className='list'>
                    <li style={{ color: 'white', listStyleType: 'none' }}>Accueil</li>
                    <li style={{ color: 'white', listStyleType: 'none' }}>Profil</li>
                    <li style={{ color: 'white', listStyleType: 'none' }}>Réglages</li>
                    <li style={{ color: 'white', listStyleType: 'none' }}>Communauté</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;