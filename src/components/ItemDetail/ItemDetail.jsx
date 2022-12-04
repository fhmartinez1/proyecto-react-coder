import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {

    const { cart, isInCart, addItem } = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }

    return (
        <>
            <div className="py-3">
                <div className="row justify-content-center">
                    <div className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={producto.img} className="img-fluid rounded-start" alt="imagen de producto" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{producto.nombre}</h4>
                                    <h5 className="card-text">Precio: ${producto.precio}</h5>
                                    <p className="card-text">Marca: {producto.marca}</p>
                                    <p className="card-text">Modelo: {producto.modelo}</p>
                                    <p className="card-text"><small className="text-muted">Cantidad en stock: {producto.stock}</small></p>
                                    <ItemCount producto={producto} onAdd={onAdd} />
                                    <div className="container py-3">
                                        <Link to={'/checkout'}><button className="btn btn-secondary">Finalizar Compra</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );
}

export default ItemDetail;
