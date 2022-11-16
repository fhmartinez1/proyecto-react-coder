import { useState } from 'react';

const ItemCount = ({producto}) => {
    const [contador, setContador] = useState(1);

    const modContador = (operacion) => {
        if (operacion === "+") {
            if (contador < producto.stock) //iria producto.stock cuando tenga stock
                setContador(contador + 1);
        } else {
            if (contador > 1)
                setContador(contador - 1);
        }
    }

    const onAdd = (cantidad) => {
        if (cantidad <= producto.stock){ //iria producto.stock cuando tenga stock
            console.log(cantidad);
        } else {
            console.log("La cantidad supera al stock disponible")
        }
    }
    return (
        <>
            <div className="container justify-items-center">
                <div className="btn-group me-2 justify-items-center" role="group" aria-label="Count group">
                    <button type="button" onClick={() => modContador("-")} className="btn btn-primary">-</button>
                    <button type="button" className="btn btn-primary disabled px-4">{contador}</button>
                    <button type="button" onClick={() => modContador("+")} className="btn btn-primary">+</button>
                </div>

                <button type="button" onClick={() => onAdd(contador)} className="btn btn-primary">Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount;
