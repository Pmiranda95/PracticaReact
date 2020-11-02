import React, { useState,useContext } from 'react';
import Monto from './Monto';
import Button from './Button';
import CreditoContext from './context' ;
import './viewCredito.css';
export default function ViewCredito() {
    const {montoTotal,plazo} = useContext(CreditoContext);

  return (
    <div className="viewCredito">
        <div className="baseCredito">
           <strong><h1 className="titleCredito">Simulá tu crédito</h1></strong> 
            <Monto id={"idMonto"}  nombre="MONTO TOTAL"  min={5000} max={50000}/>
            <Monto  id={"idPlazo"}  nombre="PLAZO"  min={3} max={24}/>
           <div className="content">
                <div className="cuotaFija">
                   <p><strong>CUOTA FIJA POR MES</strong></p><nav className="cuotaFijaTotal">$ {(montoTotal/plazo).toFixed(2)}</nav>
                </div>
                <div className="btn-block">
                    <Button class={"btn-credito"} contenido={"OBTENE CREDITO"} /><Button class={"btn-detalles"} contenido={"VER DETALLES DE CUOTAS"}/>
                </div>
           </div>
        </div>
    </div>
  );
}