import React from 'react';
import { useState } from 'react';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import ModalCarrito from './ModalCarrito';

const NavMenu = () => {

   
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
              <Nav.Link href="#link">Administrador</Nav.Link>
              <Nav.Link href="/equipoChef">Equipo</Nav.Link>
              <Nav.Link href="/pageUbicacion">Ubicacion</Nav.Link>
            </Nav>
            <div className='py-2  d-flex gap-2'>
              <button className='btn btn-warning'>Login</button>
              <button className='btn btn-warning' onClick={handleShow}>carrito</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalCarrito show={show} handleClose={handleClose}></ModalCarrito>
    </>
  );
};

export default NavMenu;