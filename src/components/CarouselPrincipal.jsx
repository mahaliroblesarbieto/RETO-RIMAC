import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/carousel.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CarouselPrincipal = () => (
	<Carousel className="width">
		<Carousel.Item className="carousel-item1">
			<Container className="carousel-page-one">
				<Row>
					<Col sm={5}>
						<h1>Protege tu hogar desde <span className="precio-text">S/ 14.90 </span>al mes</h1>
						<p>¡Toc, toc! Estés o no en casa, tu tranquilidad está asegurada, y al mejor precio</p>
						<button className="carousel-btn">SOLICÍTALO AQUI</button>
					</Col>
					<Col sm={6}>
						<img className="d-block w-100 carousel-img" src="https://user-images.githubusercontent.com/45071050/57510696-0e94b680-72cd-11e9-8a84-298fd7e1125e.png" alt=""/>
					</Col>
				</Row>
			</Container>
		</Carousel.Item>
		<Carousel.Item className="carousel-item2">
			<Container className="carousel-page-one">
				<Row>
					<Col sm={5}>
						<h1>Te llevamos a disfrutar la final de la copa Brasil</h1>
						<p>Gana un paquete doble sin sorteos y más.</p>
						<button className="carousel-btn">CONOCE MÁS</button>
					</Col>
					<Col sm={6}>
						<img className="d-block w-100 carousel-img" src="https://user-images.githubusercontent.com/45071050/57514100-4b64ab80-72d5-11e9-9a8a-252e574d77dc.png" alt=""/>
					</Col>
				</Row>
			</Container>
		</Carousel.Item>
	</Carousel>
);
export default CarouselPrincipal;
