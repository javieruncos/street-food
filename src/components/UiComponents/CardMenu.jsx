import React, { useContext } from 'react';
import "../../assets/style/CardMenu.css"
import useCarrito from '../../hooks/useCarrito';
import { carritoContext } from '../../context/StateCarrito';

const CardMenu = ({ producto }) => {
    const { agregarAlCarrito } = useCarrito();
    const {cantidad} = useContext(carritoContext)

    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className='cardMenu my-4'>
                <a href={`/detalleProducto/${producto.id}`} className='linkCard'>
                    <div className='headerCard'>
                        <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </a>
                <div className='bodyCard container pt-4'>
                    <p className='fs-4 fw-bold'>{producto.nombreProducto}</p>
                    <div>
                        <p>{producto.ingredientes}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center pb-5 container'>
                        <p className='fs-3 fw-bold fuenteTitle'>$ 17,99</p>
                        <button onClick={() => { agregarAlCarrito(producto,cantidad) }}>carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMenu;