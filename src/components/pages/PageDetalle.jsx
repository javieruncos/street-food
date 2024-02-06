import React, { useContext } from 'react';
import "../../assets/style/detalleProducto.css";
import { Breadcrumb } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { obtenerProductoID } from '../../helpers/app';
import { carritoContext } from '../../context/StateCarrito';
import useCarrito from '../../hooks/useCarrito';
import useProductos from '../../hooks/useProductos';
import CardMenu from '../UiComponents/CardMenu';

const PageDetalle = () => {
    const {listaProductos} = useProductos()
    const [productoDetalle, setProductoDetalle] = useState({})
    const { cantidad, setCantidad } = useContext(carritoContext)
    const { agregarAlCarrito } = useCarrito()
    const { id } = useParams();


    useEffect(() => {
        obtenerProductoID(id).then(producto => {
            setProductoDetalle(producto.datos)
        })
    }, [])


    const changeCantidad = (e) => {
        setCantidad(parseInt(e.target.value))
    }

    return (
        <section className='container mt-5 pt-4'>
            <div className='mt-3'>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item href="/pageMenu">
                        Menu
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Detalle de producto</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className='detalleContainer '>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='containerImg-detalle'>
                            <img src={productoDetalle.imagen} alt="hamburguesa" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-6'>
                        <div className='detalleProducto container '>
                            <span className='d-block fs-1 mb-2 fuente-detalle'>{productoDetalle.nombreProducto}</span>
                            <span className='fs-4 fuente-detalle'>Ingredientes</span>
                            <p>{productoDetalle.ingredientes}</p>
                            <div>
                                <span className='fs-3 fuente-detalle'>Precio</span>
                                <p className='fs-3 fw-bold precioDetalle'>${productoDetalle.precio}</p>
                            </div>
                            <span className='fs-3 fuente-detalle'>Cantidad</span>
                            <div className='containerAdd'>
                                <div className='cantidadProducto '>
                                    <input type="number" min={1}
                                        value={cantidad}
                                        placeholder={cantidad}
                                        className='w-75'
                                        onChange={changeCantidad} />
                                </div>
                                <div>
                                    <button className='BtnCarrito' onClick={() => { agregarAlCarrito(productoDetalle, cantidad) }}>Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article>
                <div className='mt-5'>
                    <h3 className='fs-1 fuente-detalle'>Acerca del producto</h3>
                    <p>
                        {productoDetalle.descripcion}
                    </p>
                </div>
            </article>
            <article>
                <div className='my-5'>
                    <h3 className='fs-1 fuente-detalle'>recomendados</h3>
                    <div className='row'>
                        {
                            listaProductos.slice(0,6).map((producto)=>(
                                <CardMenu producto={producto} key={producto._id}></CardMenu>
                            ))
                        }                        
                    </div>
                </div>
            </article>
        </section>
    );
};

export default PageDetalle;