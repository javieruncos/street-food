import React from 'react';
import "../../assets/style/Testimonios.css"
import { testimonioUser } from '../../helpers/info';
import CardTestimonios from '../UiComponents/CardTestimonios';
import SliderGalery from '../UiComponents/SliderGalery';


const Testimonios = () => {
    return (
        <section>
            <article>
                <div className='portada-testimonios'>
                    <img src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className='capaPortada-testimonios'>
                        <div className='w-50' data-aos="fade-up">
                            <h2 className='display-2 fw-bold fuenteTitle'>Testimonios de Nuestros Clientes</h2>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div className='container'>
                    <div className='row my-5' data-aos="fade-up">
                        {
                            testimonioUser.map((item) =>
                                < CardTestimonios key={item.id} item={item} />
                            )
                        }
                    </div>
                </div>
            </article>
            <article className='mb-5'>
                <div className='container' data-aos="fade-up">
                    <h3 className='display-3 fw-bold fuenteTitle'>Galeria</h3>
                    <p>Follow us on social media to stay up-to-date on our location and menu,
                        or come<br /> visit us in person and discover  your new favorite food!
                    </p>
                </div>
                <SliderGalery></SliderGalery>
            </article>
        </section>
    );
};

export default Testimonios;