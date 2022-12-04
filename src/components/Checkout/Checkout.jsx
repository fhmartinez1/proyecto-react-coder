import React from 'react';

const Checkout = () => {
    return (
        <div className='container-md py-3'>
            <div class="mb-3">
                <label for="formCompraNombre" class="form-label">Nombre y Apellido</label>
                <input type="text" class="form-control" id="formCompraNombre"/>
            </div>
            <div class="mb-3">
                <label for="formCompraEmail" class="form-label">Nombre y Apellido</label>
                <input type="email" class="form-control" id="formCompraEmail"/>
            </div>
            <div class="mb-3">
                <label for="formCompraDni" class="form-label">DNI</label>
                <input type="number" class="form-control" id="formCompraDni"/>
            </div>
            <div class="mb-3">
                <label for="formCompraTelefono" class="form-label">Telefono</label>
                <input type="number" class="form-control" id="formCompraTelefono"/>
            </div>
            <div class="mb-3">
                <label for="formCompraDirección" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="formCompraDirección"/>
            </div>
            <div class="mb-3 py-3">
                <button className='btn btn-primary'>Finalizar Compra</button>
            </div>
        </div>
    );
}

export default Checkout;
