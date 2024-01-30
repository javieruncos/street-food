import React from 'react';
import "../../assets/style/PortadaUbi.css"

const PortadaUbicacion = () => {
    return (
        <div className='PortadaUbicacion'>
            <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" />
            <div className='capa'>
                 <div>
                     <h4 className='display-3  fw-bold fuenteTitle'>Let’s Taste Delicious Street Food</h4>
                     <p>So what are you waiting for? Come taste the magic of Food Truck today!</p>
                     <button className='btn-Ubi'>Visitanos</button>
                 </div>
            </div>
        </div>
    );
};

export default PortadaUbicacion;