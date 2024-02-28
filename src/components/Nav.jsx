import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <div className='navBar'>
                <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                    >Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/About"
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                    >About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                    >Contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/Portfolio"
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                    >Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/Resume"
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                    >Resume
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;