import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Planes.scss';
const Planes = () => { 
  return (
    <div id="planes">
      <h1 className="h1-princip margin-top"><span className = "class-span">Elige </span><span>tu Plan</span></h1>
      <div class="row width">
        <div class="col-3 border-plan padding-plan margin-rigth">
          <i class="fas fa-medal star-color i-heigth"></i>
          <div class="row">
            <h2 class="h2-size">Plan Contenido</h2>
          </div>
          <div class="row">
            <h7>Tus bienes asegurados</h7>
          </div>
          <div class="row">
            <h7>PAGO MENSUAL O PRIMA</h7>
          </div>
          <div class="row">
            <h7><span class="plan-span">desde S/ 14.90</span></h7>
          </div>
          <hr></hr>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i>Asegura la estructura <br/> de tu hogar</h7>
          </div>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i> Nos adaptamos al nivel <br/> de  cobertura que necesitas</h7>
          </div>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i> Las mejores asistencias <br/> para cuidar tu hogar siempre</h7>
          </div>
          <div class="row">
            <span class="plan-span-a">VER DETALLE COMPLETO <i class="fas fa-chevron-right"></i></span>
          </div>
          <hr></hr>
          <div class="row center">
            <button class="button-plan width-plan"><Link to="/Pdp/">COMPRAR</Link></button>
          </div>
        </div>
        <div class="col-3 border-plan padding-plan margin-rigth">
          <div class="row">
            <h2 class="h2-size">Plan Edificación</h2>
          </div>
          <div class="row">
            <h7>Tu hogar lo merece</h7>
          </div>
          <div class="row">
            <h7>PAGO MENSUAL O PRIMA</h7>
          </div>
          <div class="row">
            <h7><span class="plan-span plan-black">desde S/ 45.90</span></h7>
          </div>
          <hr></hr>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i>Asegura la estructura <br/> de tu hogar</h7>
          </div>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i> Nos adaptamos al nivel <br/> de  cobertura que necesitas</h7>
          </div>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i> Las mejores asistencias <br/> para cuidar tu hogar siempre</h7>
          </div>
          <div class="row">
            <span class="plan-span-a">VER DETALLE COMPLETO <i class="fas fa-chevron-right"></i></span>
          </div>
          <hr></hr>
          <div class="row center">
            <button class="button-plan width-plan">SOLICITAR</button>
          </div>
        </div>
        <div class="col-3 border-plan padding-plan">
          <div class="row">
            <h2 class="h2-size">Plan Edif. y Contenido</h2>
          </div>
          <div class="row">
            <h7>Protección completa para tu hogar</h7>
          </div>
          <div class="row">
            <h7>PAGO MENSUAL O PRIMA</h7>
          </div>
          <div class="row">
            <h7><span class="plan-span plan-black">desde S/ 55.90</span></h7>
          </div>
          <hr></hr>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i>Asegura la estructura <br/> de tu hogar</h7>
          </div>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i> Nos adaptamos al nivel <br/> de  cobertura que necesitas</h7>
          </div>
          <div class="row margin-bottom">
            <h7><i class="fas fa-check i-color"></i> Las mejores asistencias <br/> para cuidar tu hogar siempre</h7>
          </div>
          <div class="row">
            <span class="plan-span-a">VER DETALLE COMPLETO <i class="fas fa-chevron-right"></i></span>
          </div>
          <hr></hr>
          <div class="row center">
            <button class="button-plan width-plan">SOLICITAR</button>
          </div>
        </div>
    </div>        
    </div>
  );
};
export default Planes;