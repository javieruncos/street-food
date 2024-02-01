import React from 'react';
import "../../assets/style/PageMenu.css";
import CardMenu from "../../components/UiComponents/CardMenu";
import PortadaUbicacion from "../UiComponents/PortadaUbicacion";
import useProductos from '../../hooks/useProductos';

const PageMenu = () => {
     const {listaProductos} = useProductos()
    return (
        <section>
            <article>
                <div className='PortadaMenu'>
                    <img src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                    <div className='capaPortada-menu'>
                        <div className='container'>
                            <h2 className='display-1 fuenteTitle'>Nuestro Menu</h2>
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
                    <div className='menuBusqueda'>
                        <div>
                            <button className='btnBusqueda'>Todos</button>
                            <button className='btnBusqueda'>Pizza</button>
                            <button className='btnBusqueda'>Hamburguesa</button>
                            <button className='btnBusqueda'>Tacos</button>
                        </div>
                    </div>
                </div>
                <div className='container mt-4'>
                    <div className='row'>
                        {
                            listaProductos.map((producto)=>(
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