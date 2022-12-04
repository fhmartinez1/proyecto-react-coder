import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <>
            <div className="card py-3" key={prod.id} style={{ width: '18rem' }}>
                <img src={prod.img} className="card-img-top" alt="imagen de producto" />
                <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">Precio: ${prod.precio}</p>
                    <button className="btn btn-primary"><Link className='nav-link' to={`/product/${prod.id}`} >Ver Producto</Link></button>
                </div>
            </div>
        </>
    );
}

export default Item;




