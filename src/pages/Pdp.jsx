import React from 'react';
import './styles/Pdp.scss';

const PrincipalesCoberturas = () => {
	return(
		<div className="princip-cobert">
			<h3 className="h3-cobert">Tus principales <span className="span-cobert">coberturas</span></h3>
			<a href="/Pdp/">Ver más detalles de las coberturas</a>
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 row">
					<div className="col-4">
						<img src="https://www.rimac.com.pe/productoweb/flujodomi2/images/destruccion-amarillo.png" alt=""/>
						<p className="p-cobert">Terremotos</p>
					</div>
					<div className="col-4">
						<img src="https://www.rimac.com.pe/productoweb/flujodomi2/images/robo-amarillo.png" alt=""/>
						<p className="p-cobert">Robo o Intento de Robo</p>
					</div>
					<div className="col-4">
						<img class="icon-asistencia"src="https://www.rimac.com.pe/productoweb/flujodomi2/images/solo-contenido.png" alt=""/>
						<p className="p-cobert">Asistencias</p>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
			<div class="row marginleft">
			<div class="col-6 background-white padding-top border">
			  <div class="row center-p">
			    <h2 class="center-p">Tu seguro cubrirá</h2>
			  </div>
			  <div class="row">
			    <h8 class="center-p-second"><span class="size-second bolder">Hasta</span></h8>
			  </div>
			  <div class="row">
			    <h2 class="center-p-third"><span class="bolder">S/ 10.000</span></h2>
			  </div>
			</div>
			<div class="col-4 background-yellow padding-top border-rigth">
			  <div class="row size-second">
			    <h8 class="size-second center-p">Prima comercial mensual</h8>
			  </div>
			  <div class="row size-second">
			    <h8 class="size-second center-p">Plan desde:</h8>
			  </div>
			  <div class="row">
			    <h2 class="center-p-third">S/ 14.90 mensual</h2>
			  </div>
			  <div class="row size-second">
			    <h8 class="size-second center-p">al contado S/178.81 anual</h8>
			  </div>
			</div>
			</div>
			<button className="btn-ro btn-princ">COMPRAR</button>
		</div>
	)
};

const Comolocompro = () => {
	return (
		<div className="comolo-compro">
			<h3 className="h3-cobert"><span className="span-cobert">¿Cómo lo compro?</span></h3>
			<p>TU COMPRA 100% SEGURA</p>
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8 row">
					<div className="col-4">
						<img src="https://www.rimac.com.pe/respaldoinfartoalcorazon/static/media/comocomprar-paso1.d2373174d1f2fbed6debbb613eea748f.png" alt=""/>
						<p className="p-cobert">Llena los datos del formulario online</p>
					</div>
					<div className="col-4">
						<img src="https://www.rimac.com.pe/respaldoinfartoalcorazon/static/media/comocomprar-paso2.1373fe73afb99358ccb384f1d163d7dd.png" alt=""/>
						<p className="p-cobert">Realiza el pago con Tarjeta de Crédito / Débito</p>
					</div>
					<div className="col-4">
						<img src="https://www.rimac.com.pe/respaldoinfartoalcorazon/static/media/comocomprar-paso3.c097ed9f6c4ca86af0e8533fd2cf8d61.png" alt=""/>
						<p className="p-cobert">Recibe el mail de bienvenida en tu correo. Tu póliza llegará después de 15 días a tu domicilio</p>
					</div>
				</div>
				<div className="col-2"></div>
			</div>
			<button className="btn-ro btn-princ">COMPRALO AQUÍ</button>
		</div>
	);
};

const Quierescomprar = () => { 
  return (
    <div class="row div-quieres">
			<div class="col-4">
				<img class="img-quiere" src="https://user-images.githubusercontent.com/45070947/57518748-60ded300-72df-11e9-8d0d-cf7d288a2cb0.png" alt="logo-rimac" />
			</div>
			<div class="col-8">
				<h3 className="h3-cobert">¿Quieres <span className="span-cobert">comprar este seguro?</span></h3>
				<p class="p-quieres">Nuestros expertos tienen todas las respuestas que estas buscando. Aquí te ayudaremos para que completes tu compra.</p>
				<button className="btn-ro btn-princ">CONTÁCTATE CON UN ASESOR</button>
			</div> 
		</div>
  );
};
export const Pdp = () => {
	return (
		<div className="pdp">
			<h1 className="h-pdp">Plan Contenidos</h1>
			<p className="p-pdp">Tus bienes asegurados</p>
			<PrincipalesCoberturas />
			<Comolocompro />
			<Quierescomprar />
		</div>
	);
};
