import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cartwidget.css';

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)

    return (
        <Link to="/cart" >
            <p className='text-light'>{getItemQuantity()}</p>
            <button id="cart-button" className='px-3'><i className="fa-solid fa-cart-shopping"></i></button>
        </Link>

    );
}

export default CartWidget;
