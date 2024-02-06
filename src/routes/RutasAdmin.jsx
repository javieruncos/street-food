import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admministrador from '../components/pages/Admministrador';
import EditarProducto from '../components/pages/EditarProducto';
import CrearProductos from '../components/pages/CrearProductos';

const RutasAdmin = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Admministrador></Admministrador>}></Route>
                <Route path='/editarProducto/:id' element={<EditarProducto></EditarProducto>}></Route>
                <Route path='crearProducto' element={<CrearProductos></CrearProductos>}></Route>
            </Routes>
        </>
    );
};

export default RutasAdmin;