import React, { useEffect, useState } from 'react';
import "../../assets/style/Administrador.css";
import { Form, Table } from 'react-bootstrap';
import { listarProductos } from '../../helpers/app';
import ItemTable from '../UiComponents/ItemTable';

const Admministrador = () => {

    const [productosApi, setProductosApi] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState("")

    useEffect(() => {
        listarProductos().then((respuesta) => {
            console.log(respuesta)
            setProductosApi(respuesta)
        })
    }, [])


    const handleChanceFiltro = (e) => {
        setProductosFiltrados(e.target.value)
    }

    const resultadoFiltro = productosApi.filter((producto) => (
        producto.nombreProducto.toLowerCase().includes(productosFiltrados.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(productosFiltrados.toLowerCase())
    )
    )

    console.log(resultadoFiltro)


    return (
        <section>
            <article className='container'>
                <div className='containerTitle-admin  pt-5'>
                    <h2>Administrador</h2>
                    <a href='/crearProducto' className='btn-add'>agregar Producto</a>
                </div>
                <div className='container-Filtro pt-5'>
                    <input type="text" className='form-control inputFilter' placeholder='Buscar producto' onChange={handleChanceFiltro} />
                    <Form.Select aria-label="Default select example" className='inputFilter' onChange={handleChanceFiltro}>
                        <option>Selecciona una categoria</option>
                        <option value="hamburguesa">hamburguesa</option>
                        <option value="pizza">pizza</option>
                        <option value="tacos">tacos</option>
                    </Form.Select>
                </div>
            </article>
            <article className='container'>
                <div className='pt-5 table-responsive'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>editar/borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                productosFiltrados === "" ? productosApi.map((producto) => (
                                    <ItemTable producto={producto} key={producto.id} setProductosApi={setProductosApi}></ItemTable>
                                )) : resultadoFiltro.map((producto) => (
                                    <ItemTable producto={producto} key={producto.id} setProductosApi={setProductosApi}></ItemTable>
                                ))

                            }
                        </tbody>
                    </Table>
                </div>
            </article>
        </section>
    );
};

export default Admministrador;