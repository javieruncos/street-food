import React, { createContext } from 'react';
import { useState } from 'react';


export const usuarioState = createContext()

const StateUsuarios = ({children}) => {

  const usuarioLocalS = JSON.parse(localStorage.getItem('usuarioFood')) || {};
   const [usuario, setUsuario] = useState(usuarioLocalS)

    return (
        <usuarioState.Provider value={{usuario, setUsuario}}>
            {children}
        </usuarioState.Provider>
    )
};

export default StateUsuarios;