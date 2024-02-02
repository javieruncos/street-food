const urlUser = import.meta.env.VITE_APP_USUARIOS;

export const crearUsuarios = async(data)=>{
    try {
        const respuesta = await fetch(urlUser,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        });

        const usuario = {
            data: await respuesta.json(),
            status: respuesta.status
        }

        return usuario

    } catch (error) {
        console.log(error);
    }
}

export const obtenerUsuarios = async()=>{
    try {
        const respuesta = await fetch(urlUser);
        const listaUsuarios = await respuesta.json();
        return listaUsuarios;
    } catch (error) {
        console.log(error)
    }
}