import { Navigate } from 'react-router-dom';
import React from 'react';

const RutasProtegidas = ({children}) => {
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioFood')) || null
    if(!usuarioLogueado){
        return <Navigate to='/login' />
    }

    if(usuarioLogueado.perfil === 'Administrador'){
        return children
    }else{
        return <Navigate to={"/login"}></Navigate>
    }
};

export default RutasProtegidas;