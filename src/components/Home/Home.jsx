import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    const [productos, setProductos] = useState([])
    const consultaDB = () => {
        fetch('./json/productos.json')
            .then(promise => promise.json())
            .then(productos => {
                const cardProductos = productos.map(prod =>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={`./img/${prod.img}`} className="card-img-top" alt="imagen de producto" />
                        <div className="card-body">
                            <h5 className="card-title">{prod.nombre}</h5>
                            <p className="card-text">{prod.marca}</p>
                            <p className="card-text">{prod.categoria}</p>
                            <p className="card-text">${prod.precio}</p>
                        </div>
                    </div>
                )
                console.log(cardProductos)
                setProductos(cardProductos)
            })
    }

    useEffect(() => {
        consultaDB()
    }, []);
    

    return (
        <div>
            {productos}
        </div>
    );
}

export default Home;
