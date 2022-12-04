import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";

const ItemDetail = ({ producto }) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

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
                                <img src={`../img/${producto.img}`} className="img-fluid rounded-start" alt="imagen de producto" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4 className="card-title">{producto.nombre}</h4>
                                    <h5 className="card-text">Precio: ${producto.precio}</h5>
                                    <p className="card-text">Marca: {producto.marca}</p>
                                    <p className="card-text">Modelo: {producto.modelo}</p>
                                    <p className="card-text"><small className="text-muted">Cantidad en stock: {producto.stock}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ItemCount producto={producto} onAdd={onAdd}/>
        </>


    );
}

export default ItemDetail;
