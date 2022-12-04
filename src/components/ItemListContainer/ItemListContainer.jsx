import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos } from "../../assets/firebase";
import { generatePath, useLocation, useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])
    const { category } = useParams()
    const location = useLocation()
    useEffect(() => {
        if(category){
            getProductos()
            .then(products => {
                const productList = products.filter(prod => prod.idCategoria === parseInt(category))
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos)
                const newPath = generatePath("/category/:category", {category: productList[0].categoria})
                window.history.replaceState(null, '', newPath)
            })
        } else {
            getProductos()
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
