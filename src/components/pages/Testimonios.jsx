import React from 'react';
import "../../assets/style/Testimonios.css"

const Testimonios = () => {
    return (
        <section>
            <article>
                <div className='portada-testimonios'>
                <img src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                  <div className='capaPortada-testimonios'>
                       <div className='w-50'>
                        <h2 className='display-3 fuenteTitle'>Testimonios de Nuestros Clientes</h2>
                       </div>
                  </div>
                </div>
            </article>
            <article>
                <div className='container'>
                   <div className='row my-5'>
                     <div className='col-12 col-md-4'>
                        <div className='cardTestimonios container'>
                            <div className='header-card container py-3'>
                               <div className='profileImg'>
                                <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                               </div>
                                <span className='fuenteTitle'>@nombreUser</span>
                            </div>
                            <div className='card-body container'>
                                <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                     </div>
                   </div>
                </div>
            </article>
        </section>
    );
};

export default Testimonios;