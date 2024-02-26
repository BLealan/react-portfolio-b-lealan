import { Link } from 'react-router-dom';
import Navigation from './UI/Navigation';

export default function Nav() {
    return (
        <Navigation
            links={[
                // Link to default Homepage
                <Link key={1} className="" to="/">Home</Link>,
                <Link key={2} className="" to="/about">About Me</Link>,
                <Link key={3} className="" to="/portfolio">Portfolio</Link>,
                <Link key={4} className="" to="/contact">Contact</Link>,
                <Link key={5} className="" to="/resume">Resume</Link>,
            ]}
        />
    );
}