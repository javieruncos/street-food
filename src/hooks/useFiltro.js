import React from 'react';
import { useState } from 'react';



const useFiltro = () => {
   const [filtro, setFiltro] = useState({
    categoria:"All"
   })
   
    const filtroProductos = (lista)=>{
        return lista.filter((item)=>(
            item.categoria === filtro.categoria || filtro.categoria === "All"
        ))
    }

    return {filtroProductos,filtro,setFiltro}
};

export default useFiltro;