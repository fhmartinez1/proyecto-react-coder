import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {

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
                                <div className="p-3">
                                    <button className="btn btn-primary p-2">Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ItemCount />
        </>


    );
}

export default ItemDetail;
