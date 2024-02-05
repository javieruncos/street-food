import React, { useContext } from 'react';
import { useState } from 'react';
import "../../assets/style/MenuNav.css"
import { Navbar, Container, Nav } from 'react-bootstrap';
import ModalCarrito from './ModalCarrito';
import { carritoContext } from '../../context/StateCarrito';

const NavMenu = () => {
  const { cantidadProductos } = useContext(carritoContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark NavMenu">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/pageMenu">Menu</Nav.Link>
              <Nav.Link href="/testimonios">Testimonios</Nav.Link>
              <Nav.Link href="/administrador">Administrador</Nav.Link>
              <Nav.Link href="/equipoChef">Equipo</Nav.Link>
              <Nav.Link href="/pageUbicacion">Ubicacion</Nav.Link>
            </Nav>
            <div className='py-2  d-flex gap-3'>
              <a href="/registro" className='linkRegistro'>Registrarse</a>
              <button className='btn btnLogin'>
                logout
              </button>
              <a href='/login' className='btn btnLogin'>
                <i className="bi bi-person-circle"></i>
              </a>
              <button className='btnCarrito' onClick={handleShow}>
                <i className="bi bi-cart"></i>
                <span>{cantidadProductos}</span>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalCarrito show={show} handleClose={handleClose}></ModalCarrito>
    </>
  );
};

export default NavMenu;