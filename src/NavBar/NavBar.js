import React from 'react';
import './NavBar.css';
import foto from '../assets/Logo.png';
import CartWidget from './CartWidget';
import {Link} from  'react-router-dom';

function Navbar() {
    return (
        <nav className='Menu-nav'>
            <div className="navbar-container">
                <img src={foto} alt="LogoTienda" className="logo" />
                <ul className="nav-pestañas">
                    <li><Link to="/todos">Todos</Link></li>
                    <li><Link to="/camisetas">Camisetas</Link></li>
                    <li><Link to="/championes">Championes</Link></li>
                </ul>
                <div>
                    <ul className="carrito">
                        <li className='cart-shop'>
                            <Link to="/cart"><CartWidget /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
