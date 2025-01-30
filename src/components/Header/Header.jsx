import { FaBars} from 'react-icons/fa';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); 


    return (
        <header>
            <nav>
                <div className='nav-logo'> {/*Mudar o logo para algo mais chamativo e infantil */}
                    <img src='/images/logo.png' alt='Logo ABC Divertido'/>
                </div>

                <div className='nav-links'>
                    {/* Botão dropdown para telas menores */}
                    <button className="dropdown-button"
                    onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBars/>
                    </button>

                    <ul className={`menu-list ${menuOpen ? "active" : ""}`}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/historias-page">Histórias infantis</Link>
                        </li>
                        <li>
                            <Link to="/conheca-mais">Conheça Mais</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;