import React from 'react';
import './styles/Ssm.scss';
import Informacion from '../components/Informacion';
import Planes from '../components/Planes';
import PreguntasFrecuentes from '../components/PreguntasFrecuentes';

const Ssm = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6 div-inicio">
					<img src="https://user-images.githubusercontent.com/45070947/57475721-84136f00-725a-11e9-87a7-18bbc1edb5ee.png" alt="img-seguro" className='col-6' />
				</div>
				<div className="col-6 div-inicio">
					<h4 className="h8">MIS BIENES</h4>
					<h1><span className = "class-span">Seguro </span><span>Hogar a tu Medida</span></h1>
					<p>¡Toc, toc! Estés o no en casa, tu tranquilidad está asegurada, y al mejor precio</p>
					<div className="row">
						<button className="btn-ro btn-planes">Conoce nuestros planes desde S/. 14.90</button>
						<button className="btn-ro btn-seguro">USAR MI SEGURO</button>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<h1><span className = "class-span">¿Por qué este</span><span> seguro?</span></h1>
					<p>Cuidamos a tu hogar como lo harias tú. Por eso te brindamos la protección a tu medida.</p>
				</div>	
				<div className="col">
					<img src="https://user-images.githubusercontent.com/45070947/57491210-83420380-7281-11e9-87ab-d1786348f0e5.png" alt="" className="col-6"/>
				</div>
			</div>
			<Informacion />
			<Planes />
			<PreguntasFrecuentes/>
		</div>
	);
};

export default Ssm;