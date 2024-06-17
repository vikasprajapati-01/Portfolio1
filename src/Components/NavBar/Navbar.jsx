import './NavBar.css';

import logo from '../../assets/VikasLogoW.png';
import home_icon from '../../assets/HomeW.png';
import skill_icon from '../../assets/SkillsW.png';
import project_icon from '../../assets/ProjectW.png';
import education_icon from '../../assets/EducationW.png';
import contact_icon from '../../assets/MailW.png';

import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className={`${showMenu ? 'nav-menu show-menu' : 'nav-menu'}`}>
                <img src={logo} alt="" className='nav-logo' />
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to='/Portfolio1' className={({ isActive }) => isActive ? 'nav-link active-nav' : 'nav-link'} onClick={() => setShowMenu(!showMenu)} >
                            <img src={home_icon} alt="" className="nav-icon" />
                            <h3 className="nav-name">Home</h3>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='Portfolio1/skills' className={({ isActive }) => isActive ? 'nav-link active-nav' : 'nav-link'} onClick={() => setShowMenu(!showMenu)} >
                            <img src={skill_icon} alt="" className="nav-icon" />
                            <h3 className="nav-name">Skills</h3>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='Portfolio1/projects' className={({ isActive }) => isActive ? 'nav-link active-nav' : 'nav-link'} onClick={() => setShowMenu(!showMenu)} >
                            <img src={project_icon} alt="" className="nav-icon" />
                            <h3 className="nav-name">Projects</h3>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='Portfolio1/education' className={({ isActive }) => isActive ? 'nav-link active-nav' : 'nav-link'} onClick={() => setShowMenu(!showMenu)} >
                            <img src={education_icon} alt="" className="nav-icon" />
                            <h3 className="nav-name">Education</h3>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='Portfolio1/contact' className={({ isActive }) => isActive ? 'nav-link active-nav' : 'nav-link'} onClick={() => setShowMenu(!showMenu)} >
                            <img src={contact_icon} alt="" className="nav-icon" />
                            <h3 className="nav-name">Contact</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={`${showMenu ? 'nav-toggle animate-toggle' : 'nav-toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}

export default Navbar