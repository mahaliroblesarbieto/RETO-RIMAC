import React from 'react';
import './styles/Recomendacion.scss';
const Recomendacion = () => { 
  return (
    <div class="row margin-top background">
    <div class="col-6">
      <div class="row">
        <img class="img-recomendacion" src="https://www.rimac.com/content/dam/rimac/publica/rimac/producto/extras-productos/producto_d_peru@2x.png" alt="logo-rimac" />
      </div>
    </div>
    <div class="col-6">
      <div class="row margin-top">
        <h2 class="white">Protegemos tu mundo, <br/> impulsamos tu bienestar</h2>
      </div>
      <div class="row">
        <p class="white recomendacion-heigth">Más de 1,8 millones de clientes nos han elegido para <br/> pensar en su tranquilidad primero. Nuestro respaldo son <br/> 14 años como líderes del mercado asegurador y 123 años <br/> de historia.</p>
      </div>
    </div>
    </div>  
  );
};
export default Recomendacion;