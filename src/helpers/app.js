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