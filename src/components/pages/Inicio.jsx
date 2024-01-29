import React from 'react';
import "../../assets/style/Inicio.css";
import CardSucursales from '../UiComponents/CardSucursales';
import { infoSucursales, infoSucursales2 } from '../../helpers/info';

const Inicio = () => {
    return (
        <section>
            <article>
                <div className='Portada-Inicio'>
                    <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='capaPortada'>
                        <div className='containerTitulo-Portada'>
                            <h1 className='display-1 text-warning fw-bold'>Indulge in the delights of authentic</h1>
                            <p className='display-4 text-light fw-bold'>street food!</p>
                            <p> take pride in offering a wide variety of mouthwatering
                                dishes that are made with only the freshest and highest
                                quality ingredients.
                            </p>
                            <div className='containerBtn-Inicio'>
                                <button>Visitanos Hoy</button>
                                <button>Ver Menu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='sucursales'>
                    <div className='containerTitulo-sucursales'>
                        <h2 className='display-2  pt-5 fw-bold'>Visitanos</h2>
                        <p>Indulge in mouthwatering dishes bursting with savory flavors
                            Our tempting <br />  assortment of street food is sure to satisfy
                            your every craving.
                        </p>
                    </div>
                    <div className='container mt-3'>
                        <div className='row'>
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
        </section>
    );
};

export default Inicio;