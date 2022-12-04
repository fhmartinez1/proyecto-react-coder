import { cargarDB } from "./firebase"

export const getProductos = async (ruta) => {
    const promise = await fetch(ruta)
    const productos = await promise.json()
    return productos
}

//cargarDB()