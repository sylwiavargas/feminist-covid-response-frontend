import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../assets/images/hamburgerwhite.png'
import logo from '../assets/images/logo.png'
import Menu from './Menu';

export default function NavBar({handleLanguageChoice}) {
    return (
        <nav className='nav-bar'>

            <a href="/about"> <img id='logo' src={logo} alt='logo'/></a>
            <section id='isBrowser'>
              <Menu handleLanguageChoice={handleLanguageChoice}/>
            </section>

            <section id='isNotBrowser'>
              <Link to="/menu">
                <img src={hamburger} className="hamburger-menu" alt="menu"  tabIndex="0"/>
              </Link>
            </section>

        </nav>
    )
}
