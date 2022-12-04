import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../assets/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const { id } = useParams()

    useEffect(() => {
        // getProductos().then(productos => {
        //     const prod = productos.find(productoArray => productoArray.id === parseInt(id))
        //     setProducto(prod)
        // })
        // const waitForProduct = async () => {
        //     const prod = await getProducto(id)
        //     setProducto(prod)
        // }
        // waitForProduct()

        getProducto(id).then(prod => { setProducto(prod) }).catch()
    }, []);

    return (
        <>
            {producto !== undefined ?
                <div>
                    <ItemDetail producto={producto} />
                </div>
                :
                <div className="container-md text-align-center py-4">
                    <h1>Producto no encontrado</h1>
                </div>
                
            }
        </>

    );
}

export default ItemDetailContainer;
