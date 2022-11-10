import { useState, useEffect } from 'react';
import { consultaDB } from "../../assets/funciones.js"

const Item = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        consultaDB()
        .then(prod => setProductos(prod))
    }, []);

    return (
        <>
            {productos}
        </>
    );
}

export default Item;
