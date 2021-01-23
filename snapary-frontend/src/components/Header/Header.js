import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'
import Logo from '../../images/logo.png'
import { IconContext } from 'react-icons/lib'

function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: '#374785' }}>
                <div className="navbar">
                    <div className="navbar-container">
                        <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                            <img src={Logo} alt="PurrtectorLogo" width="38px" height="38px" className='navbar-icon' />
                            Snapary
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes className="pink" /> : <FaBars className="pink" />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/my-cat' className="nav-links" onClick={closeMobileMenu}>
                                    Alert
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/history' className="nav-links" onClick={closeMobileMenu}>
                                    Post   
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/donate' className="nav-links" onClick={closeMobileMenu}>
                                    Sign in    
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/donate' className="nav-links" onClick={closeMobileMenu}>
                                    Register  
                                </Link>
                            </li>
                        </ul>    
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Header
