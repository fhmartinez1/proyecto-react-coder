import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';

const Navbar = React.memo(() => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container md">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" >
                                    Home
                                </Link>
                            </li>
                            <Dropdown />
                        </ul>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </>
    );
})

export default Navbar;
