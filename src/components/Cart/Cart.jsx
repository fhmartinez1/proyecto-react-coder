import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, emptyCart, totalPrice, removeItem } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ?
                <div className="container-md py-5">
                    <div className="row justify-content-center">
                        <p className="text-center">Tu carrito esta vacio</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="w-auto">
                            <Link to={'/'}><button type="button" className="btn btn-primary w-auto">Volver a la tienda</button></Link>
                        </div>
                    </div>

                </div>
                :
                <div className="container-md justify-content-center">
                    <div className="row justify-content-center">
                        {cart.map((prod, indice) =>
                            <div className="py-2 w-auto">
                                <div className="card" key={prod.id} style={{ width: '35rem' }}>
                                    <div className="row g-0 align-items-center">
                                        <div className="col-md-5 ">
                                            <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <h5 className="card-title">{prod.nombre}</h5>
                                                <p className="card-text">Cantidad: {prod.cant}</p>
                                                <p className="card-text">Precio: ${prod.precio}</p>
                                                <p className="card-text">Subtotal: ${prod.precio * prod.cant}</p>

                                            </div>
                                        </div>
                                        <div className="col-md-1">
                                            <button className="btn btn-danger px-3" onClick={() => removeItem(prod.id)}>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="row justify-content-center">
                        <div className="w-auto">
                            <h2 className="text-center">Total: ${totalPrice()}</h2>
                            <div className="row py-3">
                                <div className="col-8">
                                    <button className="btn btn-danger" onClick={emptyCart}>Limpiar carrito</button>
                                </div>
                                <div className="col-4">
                                    <Link to={'/checkout'}>
                                        <button className="btn btn-primary">Comprar</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    );
}

export default Cart;
