import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { borrarProductoApi, listarProductos } from '../../helpers/app';

const ItemTable = ({producto,setProductosApi}) => {


    const borrarProducto = (producto) => {
        Swal.fire({
          title: "Estas seguro que quieres eliminar el producto?",
          text: "No podras revertir esto!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#191919",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar!",
        }).then((result) => {
          if (result.isConfirmed) {
            borrarProductoApi(producto).then((respuesta) => {
              if (respuesta.status === 200) {
                    listarProductos().then((respuesta) => {
                     setProductosApi(respuesta);
                    })
              } else {
                console.log("error al eliminar el producto");
              }
            });
            Swal.fire("Eliminado!", "El producto se elimino correctamente.", "success");
          }
        });
      };


    return (
        <>
            <tr>
                <td>{producto._id}</td>
                <td>{producto.nombreProducto}</td>
                <td>${producto.precio}</td>
                <td className='d-flex gap-2'>
                    <a  href={`administrador/editarProducto/${producto._id}`} className='btn btn-warning'>editar</a>
                    <button className='btn btn-danger'onClick={()=>{borrarProducto(producto._id)}}>borrar</button>
                </td>
            </tr>
        </>
    );
};

export default ItemTable;