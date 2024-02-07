import React from 'react';
import "../../assets/style/PortadaUbi.css";
import pizzaPortada from "../../assets/img/pizzaPortada.jpeg"

const PortadaUbicacion = () => {
    return (
        <div className='PortadaUbicacion'>
            <img src={pizzaPortada}
                alt="" />
            <div className='capa'>
                <div data-aos="fade-up">
                    <h4 className='display-3  fw-bold fuenteTitle'>Let’s Taste Delicious Street Food</h4>
                    <p>So what are you waiting for? Come taste the magic of Food Truck today!</p>
                </div>
                <a href='/pageUbicacion' className='btn-Ubi mt-3' data-aos="fade-up">Visitanos</a>
            </div>
        </div>
    );
};

export default PortadaUbicacion;