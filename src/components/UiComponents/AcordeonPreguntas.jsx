import React from 'react';
import "../../assets/style/Acordeon.css"
import { Accordion } from 'react-bootstrap';
const AcordeonPreguntas = () => {
    return (
        <div className='container' data-aos="fade-up">
            <h2 className='text-center display-3 fuenteTitle'>Preguntas Frecuentes</h2>
            <div className='row my-5'>
                <div className='col-12 col-md-6 col-lg-6'>
                    <Accordion >
                        <Accordion.Item eventKey="0" className='acordeon'>
                            <Accordion.Header className='itemAcordeon'>
                                <span className='fuenteTitle fs-5'>Quienes somos?</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                En Street Food, nos apasiona brindar experiencias
                                gastronómicas excepcionales a nuestros clientes. Con una mezcla
                                única de sabores, ingredientes frescos y creatividad culinaria,
                                nos esforzamos por ofrecer platos que deleiten los paladares y alimenten el alma.
                                Nuestro equipo de chefs expertos se inspira en la diversidad
                                de la cocina para crear menús que fusionan lo tradicional con lo
                                innovador. Desde platos clásicos hasta creaciones vanguardistas,
                                cada bocado es una celebración de la comida y la cultura.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='acordeon'>
                            <Accordion.Header className='itemAcordeon'>
                                <span className='fuenteTitle fs-5'> ¿Utilizan ingredientes frescos en sus platos?</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                Sí,estamos comprometidos con la calidad y la frescura de nuestros ingredientes.
                                Trabajamos con proveedores locales y seleccionamos cuidadosamente cada producto para garantizar la excelencia
                                en cada plato que servimos.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='acordeon'>
                            <Accordion.Header className='itemAcordeon'>
                                <span className='fuenteTitle fs-5'> ¿Tienen opciones vegetarianas?</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                Absolutamente! , comprendemos la importancia de adaptarnos a las necesidades dietéticas
                                de nuestros clientes. Ofrecemos una variedad de opciones para vegetarianos, veganos y personas con intolerancias
                                alimentarias, incluidas opciones sin gluten.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <Accordion>
                        <Accordion.Item eventKey="0" className='acordeon'>
                            <Accordion.Header className='itemAcordeon'>
                                <span className='fuenteTitle fs-5'>¿Ofrecen  entrega a domicilio?</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                Sí, ofrecemos opciones para llevar y servicio de entrega a domicilio para que puedas disfrutar de
                                nuestros deliciosos platos en la comodidad de tu hogar. Consulta nuestra página web o llámanos para
                                conocer más detalles sobre cómo realizar tu pedido.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='acordeon'>
                            <Accordion.Header className='itemAcordeon'>
                                <span className='fuenteTitle fs-5'> ¿Cómo puedo realizar una reserva?</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                Puedes realizar una reserva fácilmente llamando a nuestro restaurante o utilizando nuestra
                                plataforma de reservas en línea. Nos aseguraremos de que tengas una experiencia gastronómica
                                memorable.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='acordeon'>
                            <Accordion.Header className='itemAcordeon'>
                                <span className='fuenteTitle fs-5'>¿Ofrecen opciones de menú para niños?</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                Sí,tenemos opciones de menú especialmente diseñadas
                                para los más pequeños. Nuestros platos para niños
                                son deliciosos y nutritivos, ¡perfectos para satisfacer el apetito de tus hijos!
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>

            </div>
        </div>
    );
};

export default AcordeonPreguntas;