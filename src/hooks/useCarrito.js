import React, { useContext } from 'react';
import { carritoContext } from '../context/StateCarrito';


const useCarrito = () => {

    const {carrito,setCarrito} = useContext(carritoContext);

    const agregarAlCarrito = (producto) => {
        // Verificar si el producto ya está en el carrito
        const productoExistente = carrito.find(item => item.id === producto.id);
    
        if (productoExistente) {
          // Si el producto ya está en el carrito, incrementar la cantidad
          setCarrito(prevCarrito => prevCarrito.map(item => (item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item)));
        } else {
          // Si el producto no está en el carrito, agregarlo con cantidad 1
          setCarrito(prevCarrito => [...prevCarrito, { ...producto, cantidad: 1 }]);
        }
      };
    return {agregarAlCarrito}
};

export default useCarrito;