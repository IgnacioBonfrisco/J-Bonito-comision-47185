import React from 'react';
import './NavBar.css';
import foto from '../assets/Logo.png';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className='Menu-nav'>
            <div className="navbar-container">
            <img src= {foto} alt="LogoTienda"className="logo"/>
        <ul className="nav-pestañas">
            <li><a href="/">Todos</a></li>
            <li><a href="/camisetas">Camisetas</a></li>
            <li><a href="/championes">Championes</a></li>
        </ul>
        <div>
        <ul className="carrito">
            <li>
                <a href="/"><CartWidget/></a>
            </li>
        </ul>
        </div>
        </div>
        </nav>
    );
};

export default Navbar;
