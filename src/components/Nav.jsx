// import { Link } from 'react-router-dom';
// import Navigation from './UI/Navigation';

// export default function Nav() {
//     return (
//         <Navigation
//             links={[
//                 // Link to default Homepage
//                 <Link key={1} className="" to="/">Home</Link>,
//                 <Link key={2} className="" to="/about">About Me</Link>,
//                 <Link key={3} className="" to="/portfolio">Portfolio</Link>,
//                 <Link key={4} className="" to="/contact">Contact</Link>,
//                 <Link key={5} className="" to="/resume">Resume</Link>,
//             ]}
//         />
//     );
// }

import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
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
    );
}

export default Navigation;