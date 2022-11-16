import { Link } from 'react-router-dom';
import './cartwidget.css';

const CartWidget = () => {
    return (
        <Link to="/cart" >
            <button id="cart-button" className='px-3'><i className="fa-solid fa-cart-shopping"></i></button>
        </Link>

    );
}

export default CartWidget;
