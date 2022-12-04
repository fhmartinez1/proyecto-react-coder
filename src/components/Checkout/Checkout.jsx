import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import { createOrden } from '../../assets/firebase';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { cart, totalPrice, emptyCart } = useContext(CartContext)
    let navigate = useNavigate()

    const formCompra = React.useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        const formData = new FormData(formCompra.current)
        const formArray = Object.fromEntries(formData)

        if(formArray.email === formArray.emailConfirm){
            if (cart.length !== 0) {
                createOrden(formArray, totalPrice()).then(orden => {
                    toast(`Se genero la compra ${orden.id}`)
                    emptyCart()
                    navigate("/")
                    e.target.reset()
                }).catch(error => {
                    toast.error("Su compra no se genero correctamente")
                    console.log(error)
                })
            } else {
                toast.error("El carrito esta vacío.")
            }
        } else {
            toast.error("Las direcciones de correo deben coincidir.")
        }
    }

    return (
        <>
            <div className="container-md py-3">
                <form onSubmit={consultarForm} ref={formCompra}>
                    <div className="mb-3">
                        <label htmlFor="formCompraNombre" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formCompraEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formCompraEmail" className="form-label">Confirmar Email</label>
                        <input type="email" className="form-control" name="emailConfirm" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formCompraDni" className="form-label">DNI</label>
                        <input type="number" className="form-control" name="dni" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formCompraTelefono" className="form-label">Telefono</label>
                        <input type="number" className="form-control" name="telefono" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formCompraDireccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" name="direccion" />
                    </div>
                    <div className="py-3">
                        <button type='submit' className='btn btn-primary'>Finalizar compra</button>
                    </div>
                    
                </form>
            </div>
        </>
    );
}

export default Checkout;
