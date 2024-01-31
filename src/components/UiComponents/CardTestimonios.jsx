import React from 'react';

const cardTestimonios = ({item}) => {
    return (
        <div className='col-12 col-md-6 col-lg-4' key={item.id}>
            <div className='cardTestimonios container my-3'>
                <div className='header-card container py-3'>
                    <div className='profileImg'>
                        <img src={item.imgUsuario} alt="" />
                    </div>
                    <span className='fuenteTitle text-secondary'>{item.usuario}</span>
                </div>
                <div className='card-body container'>
                    <p className='card-text'>{item.comentario}</p>
                </div>
            </div>
        </div>
    );
};

export default cardTestimonios;