import React, { useEffect ,useState} from 'react';
import { listarProductos } from '../helpers/app';

const useProductos = () => {

    const [listaProductos, setListaProductos] = useState([])


    useEffect(() => {
        listarProductos().then(respuesta => {
            setListaProductos(respuesta)
            console.log(respuesta)
        })
    }, [])



    return { listaProductos }
};

export default useProductos;