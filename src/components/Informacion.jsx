import React, { useState } from 'react';
const info = [
	{ img:'https://user-images.githubusercontent.com/45070947/57494746-577a4a00-7290-11e9-9e36-05937c35dc39.png',
		text1: 'Te asistimos las 24 horas, solo llámanos',
		text2: 'Cuidamos tu hogar: gasfitería, limpieza de hogar y mano de obra en pintura',
		text3: 'Te indemnizamos por robos, vandalismo, incendios, inundaciones, sismos y rotura accidental de vidrios',
		text4: 'Aseguramos la tele que tanto quieres y el play que tanto usas',
		text5: 'Ver más..'
	},
	{ img:'https://user-images.githubusercontent.com/45070947/57492883-3d3c6e00-7288-11e9-8c48-23a46af175d2.png',
		text1: 'Si tu casa no se emplea como vivienda familiar',
		text2: 'Si no está construida de cemento, ladrillo y fierro ',
		text3: 'Si tiene más de 15 días de inhabitada',
		text4: 'Si es casa de playa o campo ',
		text5: 'Ver detalle de todas'
	},
	{ img:'https://user-images.githubusercontent.com/45070947/57493458-95746f80-728a-11e9-87c3-ef3c6b534cd2.png',
		text1: 'Te ayudamos con la instalación y limpieza de cortinas, alfombras y muebles',
		text2: 'Además, lavado de colchones, muebles y alfombras',
		text3: 'Perforación de muros para cuadros y espejos',
		text4: 'Y referencias y coordinación de técnicos en general',
		text5: 'Ver más..'
	},
];

const Informacion = () => {
  const [text, setText] = useState(info[0]);
	return (
		<div>
			<div className="row">
				<button className="col-4" onClick={() => setText(info[0])}><p>¿Qué cubre?</p></button>
				<button className="col-4" onClick={() => setText(info[1])}><p>¿Qué no cubre?</p></button>
				<button className="col-4" onClick={() => setText(info[2])}><p>Mis Beneficios</p></button>
			</div>
			<div className="row">
				<div className="col">
					<img src={text.img} alt='img' className="col-6"/>
				</div>
				<div className="col">
					<ul>
						<li>{text.text1}</li>
						<li>{text.text2}</li>
						<li>{text.text3}</li>
						<li>{text.text4}</li>
						<li>{text.text5}</li>
					</ul>
				</div>
			</div>
		</div>      
  );
};

export default Informacion;