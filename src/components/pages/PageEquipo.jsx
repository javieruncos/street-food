import React from 'react';
import "../../assets/style/Equipo.css"
import { infoChef } from '../../helpers/infoTeam';
import CardInfoChef from '../UiComponents/CardInfoChef';
import PortadaUbicacion from '../UiComponents/PortadaUbicacion';
import AcordeonPreguntas from '../UiComponents/AcordeonPreguntas';


const PageEquipo = () => {
    return (
        <div>
            <div className='portadaIeam'>
                <img src="https://images.pexels.com/photos/5779787/pexels-photo-5779787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div>
                    <h2 className='display-2 fw-bold fuenteTitle' data-aos="fade-up">Nuestro Equipo</h2>
                    <p data-aos="fade-up">Conoce a las personas detrás de nuestro éxito y descubre las habilidades y
                        talentos únicos <br /> que hacen de nuestro equipo una fuerza imparable en
                        nuestra industria.
                    </p>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row' data-aos="fade-up">
                    {
                        infoChef.map((item)=>(
                            <CardInfoChef item={item} key={item.id}></CardInfoChef>
                        ))
                    }
                </div>
            </div>
             <AcordeonPreguntas></AcordeonPreguntas>
            <div>
                <PortadaUbicacion></PortadaUbicacion>
            </div>
        </div>
    );
};

export default PageEquipo;