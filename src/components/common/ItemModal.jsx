import React from 'react';
import useCarrito from '../../hooks/useCarrito';

const ItemModal = ({producto}) => {

  const {actualizarCantidad} = useCarrito()
  const handleChangeCantidad = (event) => {
      const nuevaCantidad =parseInt(event.target.value) ;
      actualizarCantidad(producto.id, nuevaCantidad);
    };



    return (
        <>
        <div className='itemModal my-3'>
            <div className='containerImg-carrito'>
                 <img src="https://images.pexels.com/photos/3738755/pexels-photo-3738755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='precioProducto-carrito container'>
               <span className='fuenteTitle'>{producto.nombreProducto}</span>
               <span className='d-block mt-2  fw-bold fuenteTitle'>${producto.precio}</span>
            </div>
            <div className='containerButton-carrito'>
              <input type="number" className='w-50 inputCarrito'
               value={producto.cantidad}
               onChange={handleChangeCantidad}
              />
              <button className='btnDelete-carrito'>X</button>
              {/* <button className='btnDelete-carrito' onClick={()=>{eliminarProductoCarrito(producto)}}>X</button> */}
            </div>
        </div>
        </>
    );
};

export default ItemModal;