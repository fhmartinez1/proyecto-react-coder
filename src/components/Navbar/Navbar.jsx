import './navbar.css';
import FormBusqueda from './FormBusqueda';
import Dropdown from './Dropdown';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
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
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <Dropdown/>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre nosotros</a>
                            </li>
                        </ul>
                        <FormBusqueda busqueda={"Modelo, marca, etc..."}/>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
