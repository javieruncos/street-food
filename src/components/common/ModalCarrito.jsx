import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { carritoContext } from '../../context/StateCarrito';
import "../../assets/style/ModalCarrito.css"
import ItemModal from './ItemModal';

const ModalCarrito = ({show,handleClose}) => {

    const {carrito,total} = useContext(carritoContext);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                       {
                        carrito.map((producto)=>(
                            <ItemModal producto={producto}></ItemModal>
                        ))
                       }
                       <div className='d-flex justify-content-between'>
                          <p>Precio Total</p>
                          <p>${total}</p>
                       </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" className='w-100'>
                       Confirmar Compra
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCarrito;