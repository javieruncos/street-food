import React, { useEffect ,useState} from 'react';
import { obtenerUsuarios } from '../helpers/usuarios';

const useUsuarios = () => {
    const [listaUsuarios, setListaUsuarios] = useState([])

      useEffect(() => {
         obtenerUsuarios().then((respuesta)=>{
            console.log(respuesta)
            setListaUsuarios(respuesta)
         })
      },[])


    return {listaUsuarios,setListaUsuarios}
    
};

export default useUsuarios;