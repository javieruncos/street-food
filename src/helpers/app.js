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
