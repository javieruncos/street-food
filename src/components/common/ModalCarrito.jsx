import React, { useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { carritoContext } from '../../context/StateCarrito';
import "../../assets/style/ModalCarrito.css"
import ItemModal from './ItemModal';

const ModalCarrito = ({show,handleClose}) => {

    const {carrito} = useContext(carritoContext);
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalCarrito;