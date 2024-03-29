import React from 'react';
import "../../assets/style/PageMenu.css";
import CardMenu from "../../components/UiComponents/CardMenu";
import PortadaUbicacion from "../UiComponents/PortadaUbicacion";
import useFiltro from '../../hooks/useFiltro';
import useProductos from '../../hooks/useProductos';

const PageMenu = () => {
     const {listaProductos} = useProductos()
     const {filtroProductos,filtro,setFiltro} = useFiltro()
     const productosFiltrados = filtroProductos(listaProductos)
     
     const categoriaFiltrada = (text) => {
        setFiltro({ ...filtro, categoria: text })
    }


    return (
        <section className='MainSection'>
            <article>
                <div className='PortadaMenu'>
                    <img src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                    <div className='capaPortada-menu'>
                        <div className='container' data-aos="fade-up">
                            <h2 className='display-1 fw-bold fuenteTitle'>Nuestro Menu</h2>
                            <p>
                                Bienvenido a nuestro apetitoso blog, donde te
                                llevamos en un viaje a través del vibrante <br /> y
                                delicioso mundo de la comida
                            </p>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='mt-5 container'>
                    <div className='menuBusqueda' data-aos="fade-up">
                        <div>
                            <button className='btnBusqueda' onClick={() => { categoriaFiltrada("All") }}>Todos</button>
                            <button className='btnBusqueda'  onClick={() => { categoriaFiltrada("pizza") }} >Pizza</button>
                            <button className='btnBusqueda' onClick={() => { categoriaFiltrada("Hamburguesa") }} >Hamburguesa</button>
                            <button className='btnBusqueda' onClick={() => { categoriaFiltrada("tacos") }}>Tacos</button>
                        </div>
                    </div>
                </div>
                <div className='container mt-4'>
                    <div className='row' data-aos="fade-up">
                        {
                            productosFiltrados.map((producto)=>(
                                <CardMenu producto={producto} key={producto.id}></CardMenu>
                            ))
                        }
                    </div>
                </div>
            </article>
            <article className='mt-5'>
                <PortadaUbicacion></PortadaUbicacion>
            </article>
        </section>
    );
};

export default PageMenu;