import './NavBar.css';

import logo from '../../assets/VikasLogoW.png';
import menu from '../../assets/menuWhite.png';
import close from '../../assets/closeWhite.png';

import { Link } from 'react-router-dom';
import React , { useState } from 'react';

function Navbar() {
    const [menuIcon, setMenuIcon] = useState("nav-links");
    const [closeIcon, setCloseIcon] = useState("close-icon");

    const isActive = () => {
        menuIcon === 'nav-links' ? setMenuIcon('nav-links menu-active') : setMenuIcon('nav-links')

        closeIcon === 'close-icon' ? setCloseIcon('close-icon toggle') : setCloseIcon('close-icon')
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className={menuIcon}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/education'>Education</Link>
                </li>
                <li>
                    <Link to='/skills'>Skills</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <div onClick={isActive} className='close-icon menu-bar'>
                    <img src={close} alt="" />
                </div>
            </ul>
            <div onClick={isActive} className="menu-bar">
                <img src={menu} alt="" />
            </div>
        </div>
    );
}

export default Navbar