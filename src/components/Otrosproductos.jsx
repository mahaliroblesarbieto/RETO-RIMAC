import React from 'react';
import './styles/Otrosproductos.scss';

const Otrosproductos = () => {
	return (
		<div className="otros-productos margin-top">
			<h1 className="h1-prod"><span className = "class-span">Más productos para </span><span>ti</span></h1>
			<div className="row card-otros">
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57506223-d25b5900-72c0-11e9-8fb4-2e6437ac41db.png" alt="" className="img-usar-seguro"/>
					<p className="p-usar">Seguro de Salud Particular</p>
					<p className="p-otros">Conoce más</p>
				</div>
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57506247-e2733880-72c0-11e9-8843-662cc4e79e78.png" alt="" className="img-usar-seguro"/>
					<p className="p-usar">Seguro Vehicular</p>
					<p className="p-otros">Conoce más</p>
				</div>
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57506262-ed2dcd80-72c0-11e9-932c-ab2a8cd1a038.png" alt="" className="img-usar-seguro"/>
					<p className="p-usar">Seguro de Viajes</p>
					<p className="p-otros">Conoce más</p>
				</div>
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57506282-fa4abc80-72c0-11e9-9dde-0aa05b3a5efc.png" alt="" className="img-usar-seguro"/>
					<p className="p-usar">Seguro de Vida</p>
					<p className="p-otros">Conoce más</p>
				</div>
			</div>
		</div>
	);
};

export default Otrosproductos;