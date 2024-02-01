import React, { createContext } from 'react';
import { useState } from 'react';

export const carritoContext = createContext()

const StateCarrito = ({ children }) => {
    const productosLocalStorage = JSON.parse(localStorage.getItem('carritoFood')) || [];
    const totalPrecioLocalStorage = JSON.parse(localStorage.getItem('totalPrecioCarrito')) || 0; 
    const [carrito, setCarrito] = useState(productosLocalStorage)
    const [total, setTotal] = useState(totalPrecioLocalStorage);
    const [cantidad, setCantidad] = useState(1);

    return (
        <carritoContext.Provider value={{ carrito, setCarrito,cantidad ,setCantidad,total,setTotal}}>
            {children}
        </carritoContext.Provider>
    )
};

export default StateCarrito;