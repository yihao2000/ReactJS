import React from 'react';
import { Link } from 'react-router-dom'

import "./navbar.css"
const Navbar = () => {
    return (
        <nav className="navbar navbar-dark justify-content-between">
            <div className="container">
                <Link to="/" className="navbar-brand title px-2 rounded">🍇</Link>
                <div className="nav-item dropdown">
                    <Link to="#" className="nav-link dropdown-toggle btn btn-outline-info" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
                    </Link>
                    <div className="dropdown-menu bg-info" aria-labelledby="navbarDropdownMenuLink">
                        <Link to="/" className="dropdown-item text-light">Home</Link>
                        <Link to="/search" className="dropdown-item text-light">Search</Link>
                        <Link to="/favorite" className="dropdown-item text-light">Favorites</Link>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;