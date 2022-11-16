import { Link } from "react-router-dom";

const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tienda
            </a>
            <ul className="dropdown-menu">
                <li><Link className='dropdown-item' to={`/category/1`} >Mouse</Link></li>
                <li><Link className='dropdown-item' to={`/category/2`} >Teclado</Link></li>
                {/* <li><hr className="dropdown-divider" /></li> */}
                <li><Link className='dropdown-item' to={`/category/3`} >Headset</Link></li>
            </ul>
        </li>
    );
}

export default Dropdown;
