import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cartwidget.css';

const CartWidget = () => {
    const { getItemQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" >
            <div className='widget-container'>
                {getItemQuantity() > 0 ? <div className='widget-number'>{getItemQuantity()}</div> : <></>}
                <button id="cart-button" className='px-3'>
                    <i className="fa-solid fa-cart-shopping widget-icon"></i>
                </button>
            </div>

        </Link>

    );
}

export default CartWidget;
