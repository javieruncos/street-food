import React from 'react';
import "../../assets/style/CardSucursales.css"

const CardSucursales = ({infoSucursales}) => {
    return (
        <div className='cardSucursales container'>
            <div className='d-flex justify-content-between align-items-center container pt-3'>
                <p className='fs-2 fw-bold'>{infoSucursales.provincia}</p>
                <span className='fecha-card'>Lunes 29 Enero</span>
            </div>
            <div className='card-body pt-3 container'>
                <div className='d-flex justify-content-between container my-3 item-body'>
                    <div>
                        <p className='fs-5'>{infoSucursales.ciudad1}</p>
                        <p className='text-secondary'>{infoSucursales.ubicacion1}</p>
                    </div>
                    <p className='horario-card'>9:00–15:00hs</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between container my-3 item-body'>
                    <div>
                    <p className='fs-3'>{infoSucursales.ciudad2}</p>
                        <p className='text-secondary'>{infoSucursales.ubicacion2}</p>
                    </div>
                    <p className='horario-card'>9:00–15:00hs</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between container my-3 item-body'>
                    <div>
                    <p className='fs-5'>{infoSucursales.ciudad3}</p>
                        <p className='text-secondary'>{infoSucursales.ubicacion3}</p>
                    </div>
                    <p className='horario-card'>9:00–15:00hs</p>
                </div>
            </div>
        </div>
    );
};

export default CardSucursales;