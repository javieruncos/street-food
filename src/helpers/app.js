const urlProductos = import.meta.env.VITE_APP_PRODUCTOS;


export const listarProductos = async () => {
    try {
        const respuesta = await fetch(urlProductos);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
}


export const crearProductoApi = async(dato)=>{

     try {
        const respuesta = await fetch(urlProductos,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dato)
        })
       
        const producto = {
            datos: await respuesta.json(),
            status: respuesta.status
        }
        return producto
     } catch (error) {
        console.log(error)
     }    
}


export const obtenerProductoID = async(id) => {
    try {
        const respuesta = await fetch(`${urlProductos}/${id}`);
        const producto = {
            datos: await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    } catch (error) {
        console.log(error);
    }   
}

export const editarProductoApi = async(id,producto)=>{
    try {
        const respuesta = await fetch(`${urlProductos}/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        
        return respuesta

    } catch (error) {
        console.log(error)
        return false
    }
}


export const borrarProductoApi = async(id)=>{
    try {
        const respuesta = await fetch(`${urlProductos}/${id}`,{
            method: 'DELETE',
        })
        return respuesta
    } catch (error) {
        console.log(error)
    }
}


