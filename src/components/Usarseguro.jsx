import React from 'react';
import './styles/Usarseguro.scss';

const Usarseguro = () => {
	return (
		<div className="usar-seguro" id="usar-seguro">
			<h1 className="h1-usar"><span className = "class-span">¿Cómo usar mi seguro de </span><span>Hogar?</span></h1>
			<div className="row">
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57503729-0cbff880-72b7-11e9-8f00-f60f49136ab6.jpg" alt="" className="img-usar-seguro"/>
					<p className="p-usar">¿Qué hago si necesito usar un servicio?</p>
					<p className="p-usar p-link">Conoce más ...</p>
				</div>
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57503526-12690e80-72b6-11e9-80d6-70e00505f498.jpg" alt="" className="img-usar-seguro"/>
					<p className="p-usar">¿Qué hago si me robaron?</p>
					<p className="p-usar p-link">Conoce más ...</p>
				</div>
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57503632-8c999300-72b6-11e9-9220-9c59d28c0ae6.jpg" alt="" className="img-usar-seguro"/>
					<p className="p-usar">¿Qué hago si mi casa fue dañada o destruida?</p>
					<p className="p-usar p-link">Conoce más ...</p>
				</div>
				<div className="opciones-usar">
					<img src="https://user-images.githubusercontent.com/45070947/57503591-55c37d00-72b6-11e9-9d94-6fb0072d7290.png" alt="" className="img-usar-seguro"/>
					<p className="p-usar">¿Cómo saber si mi seguro esta activo?</p>
					<p className="p-usar p-link">Conoce más ...</p>
				</div>
			</div>
		</div>
	);
};

export default Usarseguro;