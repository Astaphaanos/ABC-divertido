import { FaBars, FaSearch, FaUser} from 'react-icons/fa';
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); 


    return (
        <header>
            <nav>
                <div className='nav-logo'>
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
                            <Link to="/jogos">Jogos Educativos</Link>
                        </li>
                        <li>
                            <Link to="/">Histórias</Link>
                        </li>
                        <li>
                            <Link to="/">Atividades</Link>
                        </li>
                    </ul>
                </div>

                <div className='nav-search'> 
                    <input type='search' placeholder='O que você procura?'/>
                    <FaSearch size={16} color="gray"/>
                </div>

                <div className='nav-user'>
                    <FaUser color='gray' size={16}/>
                </div>
            </nav>
        </header>
    );
}

export default Header;