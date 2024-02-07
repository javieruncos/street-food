import React from 'react';
import "../../assets/style/Inicio.css";
import CardSucursales from '../UiComponents/CardSucursales';
import { infoSucursales, infoSucursales2 } from '../../helpers/info';

import CardMenu from '../UiComponents/CardMenu';
import PortadaUbicacion from '../UiComponents/PortadaUbicacion';
import useProductos from '../../hooks/useProductos';
import SliderGalery from '../UiComponents/SliderGalery';

const Inicio = () => {

    const { listaProductos } = useProductos();

    return (
        <>
            <section className='MainSection'>
                <article>
                    <div className='Portada-Inicio'>
                        <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className='capaPortada'>
                            <div className='containerTitulo-Portada container'>
                                <h1 className='display-4  fw-bold fuenteTitle' data-aos="fade-up">Déjate llevar por los placeres de lo auténtico.</h1>
                                <p className='display-4 text-light fw-bold' data-aos="fade-up">street food!</p>
                                <p data-aos="fade-up">
                                    Nos enorgullece ofrecer una amplia variedad de platos irresistibles
                                    elaborados únicamente con
                                    ingredientes frescos y de la más alta calidad.
                                </p>
                                <div className='containerBtn-Inicio container' data-aos="fade-up">
                                    <a href='/pageUbicacion'>Visitanos</a>
                                    <a href='/pageMenu'>Ver Menu</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className='sucursales'>
                        <div className='containerTitulo-sucursales'>
                            <h2 className='display-2  pt-3 fw-bold fuenteTitle' data-aos="fade-up">Visitanos</h2>
                            <p data-aos="fade-up">
                                Déjate llevar por deliciosos platos llenos de sabores irresistibles. Nuestra
                                tentadora variedad de comida callejera seguramente satisfará todos tus antojos.
                            </p>
                        </div>
                        <div className='container mt-3'>
                            <div className='row' data-aos="fade-up">
                                <div className='col-12 col-md-6 py-3'>
                                    <CardSucursales infoSucursales={infoSucursales}></CardSucursales>
                                </div>
                                <div className='col-12 col-md-6 py-3'>
                                    <CardSucursales infoSucursales={infoSucursales2}></CardSucursales>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article>
                    <div className='galeria mt-5'>
                        <div className='container' data-aos="fade-up">
                            <h3 className='display-3 fw-bold fuenteTitle'>Galeria</h3>
                            <p>
                                Síguenos en las redes sociales para mantenerte al día sobre nuestra ubicación y menú,<br />
                                o ven a visitarnos en persona ¡y descubre tu nueva comida favorita!
                            </p>
                        </div>
                        <SliderGalery></SliderGalery>
                    </div>
                </article>
            </section>
            <section>
                <article className='container my-5'>
                    <div className='Menu-Inicio'>
                        <div className='text-center tituloMenu container' data-aos="fade-up">
                            <h2 className='display-3 fw-bold fuenteTitle'>Nuestro Menu</h2>
                            <p>
                                Nuestros platos distintivos son preparados en el lugar por nuestros
                                experimentados chefs, <br /> quienes aportan su toque único y experiencia a
                                cada comida.
                            </p>
                        </div>
                        <div className='row my-5' data-aos="fade-up">
                            {
                                listaProductos.slice(0, 9).map(producto => (
                                    <CardMenu producto={producto} key={producto._id}></CardMenu>
                                ))
                            }
                        </div>
                        <div className='d-flex justify-content-center'>
                            <a href='/pageMenu' className='btnRowMenu'>Ir al menu</a>
                        </div>
                    </div>
                </article>
                <article>
                    <PortadaUbicacion></PortadaUbicacion>
                </article>
            </section>
        </>
    );
};

export default Inicio;