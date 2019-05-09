import React from 'react';
import './Ssm.scss';

const Ssm = () => {
	return (
		<div className="row">
			<div className="col">
				<img src="https://user-images.githubusercontent.com/45070947/57475721-84136f00-725a-11e9-87a7-18bbc1edb5ee.png" alt="img-seguro" className='col-6' />
			</div>
			<div className='col'>
				<span>MIS BIENES</span>
				<h1>Seguro Hogar a tu Medida</h1>
				<p>¡Toc, toc! Estés o no en casa, tu tranquilidad está asegurada, y al mejor precio</p>
				<button>VER PLANES</button>
				<button>USAR MI SEGURO</button>
			</div>
		</div>
	);
};

export default Ssm;