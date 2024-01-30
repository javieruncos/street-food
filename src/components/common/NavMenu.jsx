import React from 'react';
import { Navbar ,NavDropdown,Container,Nav} from 'react-bootstrap';

const NavMenu = () => {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark NavMenu">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/pageMenu">Menu</Nav.Link>
              <Nav.Link href="#link">Testimonios</Nav.Link>
              <Nav.Link href="#link">Administrador</Nav.Link>
              <Nav.Link href="#link">Equipo</Nav.Link>
              <Nav.Link href="#link">Ubicacion</Nav.Link>
            </Nav>
            <div className='py-2  d-flex gap-2'>
                <button className='btn btn-warning'>Login</button>
                <button className='btn btn-warning'>carrito</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavMenu;