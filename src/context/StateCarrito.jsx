import React, { createContext } from 'react';
import { useState } from 'react';

export const carritoContext = createContext()

const StateCarrito = ({ children }) => {
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)

    return (
        <carritoContext.Provider value={{ carrito, setCarrito }}>
            {children}
        </carritoContext.Provider>
    )
};

export default StateCarrito;