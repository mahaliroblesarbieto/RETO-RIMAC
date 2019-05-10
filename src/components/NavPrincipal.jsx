import React,{useState} from 'react';
import { Link } from "react-router-dom";
import './styles/Navprincipal.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const OpcionesSeguro = () =>{
return(
    <NavDropdown.Divider className="description">
      <h3 className="text-seguro">Cuidamos <span className="text-resaltado">tu hogar</span> como lo harías tú.</h3>
      <Row className="types">
        <Col>
          <img className="img-typeHogar" src="https://user-images.githubusercontent.com/45071050/57506717-434f4080-72c2-11e9-8d58-643ab57854d7.png" alt="Seguro"/>
          <Link to="/Ssm/"><p className="p-nav-principal">Seguro Hogar a tu medida</p></Link>
        </Col>
        <Col>
          <img className="img-typeHogar" src="https://user-images.githubusercontent.com/45071050/57506717-434f4080-72c2-11e9-8d58-643ab57854d7.png" alt="Seguro"/>
          <p className="p-nav-principal"> Seguro Hogar</p>
        </Col>
        <Col>
          <img className="img-seguro" src="https://user-images.githubusercontent.com/45071050/57507090-5adaf900-72c3-11e9-89fd-c46988ea452c.png" alt="Seguro"/>
        </Col>
      </Row>
    </NavDropdown.Divider>
);
}

export const NavPrincipal = () => { 
  const [hogar, setHogar] = useState(false);
  return(
    <Navbar className="main-nav" bg="" variant="dark" expand="lg">
      <Navbar.Brand href="/">
      <img src="https://user-images.githubusercontent.com/45071050/57497527-ae3a5080-729d-11e9-9727-876c9a574c32.png" alt="Rimac" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Nuestros Seguros" id="basic-nav-dropdown">
            <NavDropdown.Header className="seguros" href="#action/3.1">
              <Row className="row-seguros">
                <Col className="col-seguros">
                  <img className="img-seguros"src="https://user-images.githubusercontent.com/45071050/57502457-61f90b80-72b1-11e9-8725-3c36f3c27be7.png" alt="Salud"/>
                  <p>Salud</p>
                </Col>
                <Col>
                  <img className="img-seguros"src="https://user-images.githubusercontent.com/45071050/57502449-61607500-72b1-11e9-8b51-55200145bcaa.png" alt="Vehicular"/>
                  <p>Vehicular</p>
                </Col>
                <Col>
                  <img className="img-seguros"src="https://user-images.githubusercontent.com/45071050/57502450-61607500-72b1-11e9-8292-8c34e944dc0b.png" alt="Vida"/>
                  <p>Vida</p>
                </Col>
                <Col>
                  <div onClick={()=>{setHogar(!hogar)}}>
                    <img className="img-seguros"src="https://user-images.githubusercontent.com/45071050/57502451-61607500-72b1-11e9-8762-fffccda5fb8d.png" alt="Hogar"/>
                    <p>Hogar</p>
                  </div>
                </Col>
                <Col>
                  <img className="img-seguros"src="https://user-images.githubusercontent.com/45071050/57502453-61f90b80-72b1-11e9-8655-c228c2b1dd7b.png" alt="Viajes"/>
                  <p>Viajes</p>
                </Col>
                <Col>
                  <img className="img-seguros"src="https://user-images.githubusercontent.com/45071050/57502454-61f90b80-72b1-11e9-9529-2594534ad2e1.png" alt="Empresa"/>
                  <p>Empresa</p>
                </Col>
                <Col>
                  <img className="img-seguros"src="https://user-images.githubusercontent.com/45071050/57502455-61f90b80-72b1-11e9-8f05-08dd3672b581.png" alt="Trabajadores"/>
                  <p>Trabajadores</p>
                </Col>
              </Row>
            </NavDropdown.Header>
            {hogar ? <OpcionesSeguro /> : ""}
          </NavDropdown>
          <Nav.Link href="/">Promociones</Nav.Link>
          <Nav.Link href="#link">Centro de Ayuda</Nav.Link>
        </Nav>
        <Form inline>
          <img className="img-busqueda"src="https://user-images.githubusercontent.com/45071050/57501194-2445b400-72ac-11e9-8a7f-a4d62dabc573.png" alt="Busqueda"/>
          <btn class="btn-nav">
            <img src="https://user-images.githubusercontent.com/45071050/57500520-4db11080-72a9-11e9-9931-c0d9892ab102.png" alt="Usuario"/> MI CUENTA
          </btn>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};