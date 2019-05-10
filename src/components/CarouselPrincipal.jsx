import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/carousel.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CarouselPrincipal = () => (
	<Carousel className="width">
		<Carousel.Item className="carousel-item">
			<Container className="carousel-page-one">
				<Row>
					<Col>
						<h1>Te llevamos a disfrutar la final de la copa Brasil</h1>
						<p>Gana un paquete doble sin sorteos y más.</p>
						<button className="carousel-btn">CONOCE MÁS</button>
					</Col>
					<Col>
						<img className="d-block w-100 carousel-img" src="https://user-images.githubusercontent.com/45071050/57488063-a2d42e80-7277-11e9-801d-ea0932d7d23a.png" alt=""/>
					</Col>
				</Row>
			</Container>
		</Carousel.Item>
		<Carousel.Item className="carousel-item">
			<Container className="carousel-page-one">
				<Row>
					<Col>
						<h1>Te llevamos a disfrutar la final de la copa Brasil</h1>
						<p>Gana un paquete doble sin sorteos y más.</p>
						<button className="carousel-btn">CONOCE MÁS</button>
					</Col>
					<Col>
						<img className="d-block w-100 carousel-img" src="https://user-images.githubusercontent.com/45071050/57488063-a2d42e80-7277-11e9-801d-ea0932d7d23a.png" alt=""/>
					</Col>
				</Row>
			</Container>
		</Carousel.Item>
	</Carousel>
);
export default CarouselPrincipal;
