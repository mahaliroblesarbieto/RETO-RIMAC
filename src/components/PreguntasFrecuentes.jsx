import React from 'react';
import './styles/PreguntasFrecuentes.scss';
const PreguntasFrecuentes = () => { 
  return (
    <div class="row margin-top">
    <div class="col-6">
      <div class="row">
        <img class="img-pregunta" src="https://www.rimac.com/content/dam/rimac/publica/rimac/producto/extras-productos/producto_d_faq@2x.png" alt="logo-rimac" />
      </div>
      <div class="row">
        <h2>Preguntas <span class="pregunta-span">frecuentes</span></h2>
      </div>
      <div class="row">
        <h4>Te ayudamos a resolver tus dudas</h4>
      </div>
    </div>
    <div class="col-6">
      <div class="row">
        <h4>¿Qué es un seguro Hogar a tu medida?</h4>
      </div>
      <div class="row">
        <p>Este seguro te permite proteger tu casa y su contenido ante <br/> cualquier incidente, y al mejor precio. Según el plan que  <br/> contrates, este tipo de seguro protege tu hogar ante sismos, <br/> incendios, robos y más.</p>
      </div>
      <div class="row">
        <h4>¿Por qué proteger mi casa?</h4>
      </div>
      <div class="row">
        <p>Tu casa propia es el resultado de tu esfuerzo y siempre es <br/> mejor que ese esfuerzo esté protegido y que, en caso de <br/> siniestro, podamos ayudarte a recuperarla sin necesidad de  <br/> grandes inversiones.</p>
      </div>
      <div class="row">
        <h4>¿Cómo comprar un seguro Hogar?</h4>
      </div>
      <div class="row">
        <p>Elige el plan que más te convenga y solicítalo desde esta <br/> misma web o acércate a cualquiera de nuestros centros de <br/> atención RIMAC a nivel nacional.  </p>
      </div>

    </div>
    </div>
    
  );
};
export default PreguntasFrecuentes;