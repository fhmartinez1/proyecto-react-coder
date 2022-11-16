import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../assets/funciones";


const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos("./json/productos.json")
            .then(productos => {
                const cardProductos = ItemList({productos})
                setProductos(cardProductos)
            })
    }, []);
    return (
        <div className="row justify-content-evenly py-3">
            {productos}
        </div>
    );
}

export default ItemListContainer;
