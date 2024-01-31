import React from 'react';
import "../../assets/style/CardMenu.css"

const CardMenu = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className='cardMenu my-4'>
                <div className='headerCard'>
                    <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className='bodyCard container pt-4'>
                    <p className='fs-4 fw-bold'>Pizza Especial</p>
                    <div>
                        <p>Two meatballs, onion, pickles, cabbage, sauce, salad, bun, 
                            onion 
                        </p>
                    </div>
                    <p className='fs-3 fw-bold fuenteTitle'>$ 17,99</p>
                </div>
            </div>
        </div>
    );
};

export default CardMenu;