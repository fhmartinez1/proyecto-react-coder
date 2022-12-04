// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbOOuX4SbmUJNRxaFtUxFrJ33CvPuK2kU",
  authDomain: "react-37090-39b88.firebaseapp.com",
  projectId: "react-37090-39b88",
  storageBucket: "react-37090-39b88.appspot.com",
  messagingSenderId: "660377844727",
  appId: "1:660377844727:web:7ed711cd03d3c6daddccf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarDB = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()

  productos.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre,
      marca: prod.marca,
      modelo: prod.modelo,
      idCategoria: prod.idCategoria,
      categoria: prod.categoria,
      img: prod.img,
      precio: prod.precio,
      stock: prod.stock
    })
  })


}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
  return items
}

const getProducto = async (id) => {
  console.log(id)
  const ref = doc(db, "productos", id);
  const docSnap = await getDoc(ref);
  const item = { ...docSnap.data(), id: docSnap.id }
  if (docSnap.exists()) {
    return item
  } else {
    console.log("Producto no encontrado.")
  }

}

//Crear producto
const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, "productos"), {
    nombre: objProducto.nombre,
    marca: objProducto.marca,
    modelo: objProducto.modelo,
    idCategoria: objProducto.idCategoria,
    categoria: objProducto.categoria,
    img: objProducto.img,
    precio: objProducto.precio,
    stock: objProducto.stock
  })

  return estado
}

//Actualizar producto
const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

//Borrar producto
const deleteProducto = async (id) => {
  const estado = await deleteDoc(doc(db, "productos", id))
  return estado
}

//Ordenes de compra
const createOrden = async (cliente, total) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: cliente.nombre,
    email: cliente.email,
    dni: cliente.dni,
    telefono: cliente.telefono,
    direccion: cliente.direccion,
    precioTotal: total,
  })

  return ordenCompra
}

const getOrden = async(id) => {
  const item = await getDoc(doc(db, "ordenCompra", id))
  const ordenCompra = {...item.data(), id: item.id}
  return ordenCompra
}

export { cargarDB, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrden, getOrden }