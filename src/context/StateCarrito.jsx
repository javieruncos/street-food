import React, { createContext } from 'react';
import { useState } from 'react';

export const carritoContext = createContext()

const StateCarrito = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0);
    const [cantidad, setCantidad] = useState(1);

    return (
        <carritoContext.Provider value={{ carrito, setCarrito,cantidad ,setCantidad,total,setTotal}}>
            {children}
        </carritoContext.Provider>
    )
};

export default StateCarrito;