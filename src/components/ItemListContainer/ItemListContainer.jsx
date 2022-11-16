import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../assets/funciones";
import { generatePath, useLocation, useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { category } = useParams()
    const location = useLocation()
    useEffect(() => {
        if(category){
            getProductos("../json/productos.json")
            .then(products => {
                const productList = products.filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos)
                const newPath = generatePath("/category/:category", {category: productList[0].categoria})
                window.history.replaceState(null, '', newPath)
            })
        } else {
            getProductos("./json/productos.json")
            .then(productList => {
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos)
            })
        }        

    }, [location]);

    return (
        <div className="row justify-content-evenly py-3">
            {productos}
        </div>
    );
}

export default ItemListContainer;
