
import React from 'react';

import logo from '../../logo.svg'
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className='logo'>
                    <a href="/" className='flex justify-center'>
                    <img src={logo} alt="" />
                    <small>Instant News</small>
                    </a>
                </div>
                <div>
                    <nav>
                        <a href="/">News</a>
                        <a href="/">Conact</a>
                        <a href="/">About</a>
                    </nav>
                </div>
            </div>
            <div className="headerInfo">
                <h2 className='text-3xl'>Welcome To News Api react project</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa inventore eligendi veniam dolore, modi laboriosam placeat. Animi ea in consectetur, provident architecto aliquid accusamus accusantium molestiae eligendi earum modi.</p>
                <h3 className='text-2xl'>Get The Lates News instantly</h3>
            </div>
        </div>
    );
};

export default Header;