import { useRef } from 'react';
import './Header.style.css';
import logo from '../../assets/favicon.png';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GrAppsRounded } from 'react-icons/gr';

export function Header() {
    const navRef = useRef(null);

    const showNavbar = () => {
        if (navRef.current) {
            navRef.current.classList.toggle('responsive_nav');
        }   
    };

    return (
        <header>
            <Link to="/" className="logo" onClick={showNavbar}>
                <img src={logo} alt="Logo" />
            </Link>
            <nav ref={navRef}>
                <Link to="/" onClick={showNavbar}>Home</Link>
                <Link to="/depoimentos" onClick={showNavbar}>Depoimentos</Link>
                <Link to="/contato" onClick={showNavbar}>Contato</Link>
                <button
                    className="nav_btn nav_close_btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav_btn"
                onClick={showNavbar}>
                <GrAppsRounded />
            </button>
        </header>
    );
}
