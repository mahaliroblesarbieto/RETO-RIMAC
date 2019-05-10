import React from 'react';
import './styles/Ssm.scss';
import Informacion from '../components/Informacion';

const Ssm = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-4 div-inicio-img">
					<img src="https://user-images.githubusercontent.com/45070947/57501120-df218200-72ab-11e9-831a-b06c8acc8503.png" alt="img-seguro" className='img-ssm-princip' />
				</div>
				<div className="col-8 div-inicio">
					<h4 className="h8">MIS BIENES</h4>
					<h1 className="h1-princip"><span className = "class-span">Seguro </span><span>Hogar a tu Medida</span></h1>
					<p className="p-ssm">¡Toc, toc! Estés o no en casa, tu tranquilidad está asegurada, y al mejor precio</p>
					<div className="row">
						<button className="btn-ro btn-planes">Conoce nuestros planes desde S/. 14.90</button>
						<button className="btn-ro btn-seguro">USAR MI SEGURO</button>
					</div>
				</div>
			</div>
			<div className="row por-que">
				<div className="col-7">
					<h1><span className = "class-span">¿Por qué este</span><span> seguro?</span></h1>
					<p className="p-ssm">Cuidamos a tu hogar como lo harias tú. Por eso te brindamos la protección a tu medida.</p>
				</div>	
				<div className="col-5">
					<img src="https://user-images.githubusercontent.com/45070947/57491210-83420380-7281-11e9-87ab-d1786348f0e5.png" alt="" className="img-segunda"/>
				</div>
			</div>
			<Informacion />
		</div>
	);
};

export default Ssm;