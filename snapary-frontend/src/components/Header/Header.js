import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'
import Logo from '../../images/logo.png'
import { IconContext } from 'react-icons/lib'

function Header() {
    const [click, setClick] = useState(false);
    const [login, setLogin] = useState(false);
    const [option, setOption] = useState(['/', '/login', '/register', '/post', '/alert', '/history']);
    const [current, setCurrent] = useState('/');

    var getText = (url) => {
        if (url === '/') {
            return 'Home'
        }
        if (url === '/post') {
            return 'Post'
        }
        if (url === '/login') {
            return 'Log in'
        }
        if (url === '/register') {
            return 'Register'
        }
        if (url === '/history') {
            return 'History'
        }
        if (url === '/alert') {
            return 'Alert'
        }
    }

    const listRender = (list) => list.map((entry) => 
        <li className="nav-item">
            <Link to={entry} className="nav-links" onClick={()=>clicked(entry)}>
                {getText(entry)}
            </Link>
        </li>);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const clicked = (link) => {
        closeMobileMenu();
        setCurrent(link);
    }

    const checkLogin = (event) => {
        fetch('https://snapary.roydu.ca/api/user/status', {
            method: 'POST'
          }).then(response => {response.json().then(data => {
              console.log(data);
              if (data["loginStatus"])
              {
                setLogin(true);
              }
        })});
    }

    useEffect(() => {
        checkLogin();
        if (login) {
            setOption(['/', '/post', '/alert', '/history'])
        }
     }, [current]);

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
                            {listRender(option)}
                        </ul>    
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Header
