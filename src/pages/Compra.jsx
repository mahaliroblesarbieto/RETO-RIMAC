import React from 'react';
import './styles/Compra.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Compra = () => {
	return(
		<div className="compra-main">
			<p className='text-compra'>Muy bien has encontrato un plan de <b>Seguro Domiciliario a tu medida</b></p>
            <p>Tu plan incluye</p>
			<div className="col-sm-12">
                <ul className="menu-compra">
                    <li className="option-compra">
                        <p>Propietario</p>
                    </li>
                    <li className="option-compra">
                        <p>Solo contenido</p>
                    </li>
                    <li className="option-compra">
                        <p>Cobertura de S/</p>
                    </li>
                    <li className="option-compra">
                        <p>S/14.90 mensual</p>
                    </li>
                </ul>
			</div>
            <Row>
                <Col className="form-compra">
                    <p className="text-form">Información del titular</p>
                    <img src="https://user-images.githubusercontent.com/45071050/57532073-8f20da80-7300-11e9-96c5-e9c96c091b03.jpg" alt=""/>
                </Col>
                <Col>
                    <p className="text-form">Información del inmueble</p>
                    <img src="https://user-images.githubusercontent.com/45071050/57532074-8fb97100-7300-11e9-9003-48062f391ff5.jpg" alt=""/>
                </Col>
            </Row>
            <img className="condiciones" src="https://user-images.githubusercontent.com/45071050/57532637-a01e1b80-7301-11e9-886b-baae2171e2f8.jpg" alt=""/><br />
            <btn className="btn-comprar">Comprar ahora</btn>

		</div>
	)
};
export default Compra;