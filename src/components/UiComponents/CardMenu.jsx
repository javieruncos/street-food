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
                <a href={`/detalleProducto/${producto._id}`} className='linkCard'>
                    <div className='headerCard'>
                        <img src={producto.imagen} alt="" />
                    </div>
                </a>
                <div className='bodyCard container pt-4'>
                    <p className=' fw-bold nombreProducto'>{producto.nombreProducto}</p>
                    <div>
                        <p>{producto.ingredientes}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center pb-5 container'>
                        <p className='fs-3 fw-bold fuenteTitle'>$ {producto.precio}</p>
                        <button className='btnCarrito mb-2' onClick={() => { agregarAlCarrito(producto,cantidad) }}>
                        <i className="bi bi-cart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardMenu;