export const consultaDB = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    const cardProductos = productos.map(prod =>
        <div className="card py-3" key={prod.id} style={{ width: '18rem' }}>
            <img src={`./img/${prod.img}`} className="card-img-top" alt="imagen de producto" />
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Marca: {prod.marca}</p>
                <p className="card-text">Modelo: {prod.categoria}</p>
                <p className="card-text">Precio: ${prod.precio}</p>
                <button className="btn btn-primary">Ver producto</button>
            </div>
        </div>
    )
    return cardProductos
}