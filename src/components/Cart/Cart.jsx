import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, emptyCart, totalPrice, removeItem } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ?
                <div className="container-md">
                    <p>Tu carrito esta vacio</p>
                    <Link to={'/'}><button type="button" className="btn btn-primary">Volver a la tienda</button></Link>
                </div>
                :
                <div>
                    {cart.map((prod, indice) =>

                        <div className="card px-2" key={prod.id} style={{ width: '18rem' }}>
                            <div className="row g-0 align-items-center">
                                <div className="col-md-4 ">
                                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{prod.nombre}</h5>
                                        <p className="card-text">Cantidad: {prod.cant}</p>
                                        <p className="card-text">Precio: ${prod.precio}</p>
                                        <p className="card-text">Subtotal: ${prod.precio * prod.cant}</p>
                                        <button className="btn btn-danger p-2" onClick={() => removeItem(prod.id)}>Eliminar producto</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>




                    )}
                    <div>
                        <p>Total: ${totalPrice()}</p>
                        <button className="btn btn-danger" onClick={emptyCart}>Limpiar carrito</button>
                        <Link to={'/checkout'}>
                            <button className="btn btn-primary">Comprar</button>
                        </Link>
                    </div>

                </div>
            }
        </>
    );
}

export default Cart;
