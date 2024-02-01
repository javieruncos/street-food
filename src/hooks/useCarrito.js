import React, { useContext } from "react";
import { carritoContext } from "../context/StateCarrito";

const useCarrito = () => {
  const { carrito, setCarrito, total, setTotal } = useContext(carritoContext);

  const agregarAlCarrito = (producto, cantidad) => {
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id ? { ...item, cantidad:item.cantidad + cantidad} : item
      );
      localStorage.setItem("carritoFood", JSON.stringify(carritoActualizado));
      setCarrito(carritoActualizado);
      // calculamos el precio total de todos los productos
      const totalPrecioCarrito = carritoActualizado.reduce(
        (total, item) => total + item.cantidad * item.precio,
        0
      );
      // guardamos el total en el state y en el localstorage
      localStorage.setItem("totalPrecioCarrito",JSON.stringify(totalPrecioCarrito));
      setTotal(totalPrecioCarrito)

    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      const NuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
      localStorage.setItem("carritoFood", JSON.stringify(NuevoCarrito));
      setCarrito(NuevoCarrito);

      const totalPrecioCarrito = NuevoCarrito.reduce(
        (total, item) => total + item.cantidad * item.precio,
        0
      );

      localStorage.setItem(
        "totalPrecioCarrito",
        JSON.stringify(totalPrecioCarrito)
      );

      setTotal(totalPrecioCarrito)
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
        (total,item)=> total + item.cantidad * item.precio ,0
      )

      localStorage.setItem("totalPrecioCarrito", totalPrecio);
      
      setTotal(totalPrecio)
      return nuevosProductos;
    });
  };

  return { agregarAlCarrito,actualizarCantidad };
};

export default useCarrito;
