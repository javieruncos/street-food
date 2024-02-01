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
      // Si el producto ya está en el carrito, incrementar la cantidad
      // setCarrito(prevCarrito => prevCarrito.map(item => (item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item)));
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      const NuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
      // setCarrito(prevCarrito => [...prevCarrito, { ...producto, cantidad: cantidad }]);
      localStorage.setItem("carritoFood", JSON.stringify(NuevoCarrito));
      setCarrito(NuevoCarrito);
    }
  };

  return { agregarAlCarrito };
};

export default useCarrito;
