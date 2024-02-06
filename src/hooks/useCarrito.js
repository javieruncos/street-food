import React, { useContext } from "react";
import { carritoContext } from "../context/StateCarrito";

const useCarrito = () => {
  const {
    carrito,
    setCarrito,
    total,
    setTotal,
    cantidadProductos,
    setCantidadProductos,
  } = useContext(carritoContext);

  const agregarAlCarrito = (producto, cantidad) => {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item._id === producto._id);

    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item._id === producto._id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );

      localStorage.setItem("carritoFood", JSON.stringify(carritoActualizado));

      // calculamos el precio total de todos los productos
      const totalPrecioCarrito = carritoActualizado.reduce(
        (total, item) => total + item.cantidad * item.precio,
        0
      );

      let resultadoPrecio = totalPrecioCarrito.toFixed(2);
      // guardamos el total en el state y en el localstorage
      localStorage.setItem(
        "totalPrecioCarrito",
        JSON.stringify(resultadoPrecio)
      );

      const totalCarritoProductos = carritoActualizado.reduce(
        (total, item) => total + item.cantidad,
        0
      );
      localStorage.setItem(
        "totalCarritoFood",
        JSON.stringify(totalCarritoProductos)
      );

      setCantidadProductos(totalCarritoProductos);
      setTotal(resultadoPrecio);
      setCarrito(carritoActualizado);

    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      const NuevoCarrito = [...carrito, { ...producto, cantidad: cantidad }];
      localStorage.setItem("carritoFood", JSON.stringify(NuevoCarrito));
      
      const totalPrecioCarrito = NuevoCarrito.reduce(
        (total, item) => total + item.cantidad * item.precio,
        0
      );

      let resultadoPrecio = totalPrecioCarrito.toFixed(2);
      // guardamos el total en el state y en el localstorage
      localStorage.setItem(
        "totalPrecioCarrito",
        JSON.stringify(resultadoPrecio)
      );

      localStorage.setItem(
        "totalPrecioCarrito",
        JSON.stringify(resultadoPrecio)
      );


      const totalCarritoProductos = NuevoCarrito.reduce(
        (total, item) => total + item.cantidad,
        0
      );
      localStorage.setItem(
        "totalCarritoFood",
        JSON.stringify(totalCarritoProductos)
      );

      setCantidadProductos(totalCarritoProductos);
      setTotal(totalPrecioCarrito);
      setCarrito(NuevoCarrito);

    }
  };

  const actualizarCantidad = (productId, nuevaCantidad) => {
    setCarrito((carritoActual) => {
      const nuevosProductos = carritoActual.map((producto) => {
        if (producto.id === productId) {
          return { ...producto, cantidad: nuevaCantidad };
        } else {
          return producto;
        }
      });
      // Actualizar el localStorage
      localStorage.setItem("carritoFood", JSON.stringify(nuevosProductos));
      const totalCarritoProductos = nuevosProductos.reduce(
        (total, item) => total + item.cantidad,
        0
      );

      localStorage.setItem("totalCarritoFood", totalCarritoProductos);

      const totalPrecio = nuevosProductos.reduce(
        (total, item) => total + item.cantidad * item.precio,
        0
      );
      const  resultadoPrecio = totalPrecio.toFixed(2);

      localStorage.setItem("totalPrecioCarrito", resultadoPrecio);

      setTotal(resultadoPrecio);

      const cantidadProductos = nuevosProductos.reduce(
        (total, item) => total + item.cantidad,
        0
      );

      localStorage.setItem("totalCarritoFood", cantidadProductos);

      setCantidadProductos(cantidadProductos);
      
      return nuevosProductos;
    });
  };

  const eliminarProductoCarrito = (producto)=>{
    const carritoFiltrado = carrito.filter(item => item._id !== producto._id)
    if(carritoFiltrado){

      const nuevaCantidad = carritoFiltrado.reduce(
       (total,item)=> total + item.cantidad,0
      )

      const nuevoPrecio = carritoFiltrado.reduce(
        (total,item)=> total + item.cantidad * item.precio,0
      )

      localStorage.setItem("carritoFood",JSON.stringify(carritoFiltrado))
      localStorage.setItem("totalCarritoFood",JSON.stringify(nuevaCantidad))
      localStorage.setItem("totalPrecioCarrito",JSON.stringify(nuevoPrecio))
      setCantidadProductos(nuevaCantidad)
      setTotal(nuevoPrecio)
      setCarrito(carritoFiltrado)
    }

  }
   


  return { agregarAlCarrito, actualizarCantidad ,eliminarProductoCarrito};
};

export default useCarrito;
