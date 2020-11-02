import React, { useContext } from 'react';
import Monto from './Monto';
import Button from './Button';
import CreditoContext from './context' ;
import './viewCredito.css';
export default function ViewCredito() {
    const {montoTotal,plazo} = useContext(CreditoContext);

  return (
    <div className="viewCredito">
        <div className="baseCredito">
           <h1 className="titleCredito"><strong>Simulá tu crédito</strong></h1> 
            <Monto id={"idMonto"}  nombre="MONTO TOTAL"  min={5000} max={50000}/>
            <Monto  id={"idPlazo"}  nombre="PLAZO"  min={3} max={24}/>
           <div className="content">
                <div className="cuotaFija">
                   <h3><strong>CUOTA FIJA POR MES</strong></h3><div className="cuotaFijaTotal">{"$"+(montoTotal/plazo).toFixed(2)}</div>
                </div>
                <div className="btn-block">
                    <Button class={"btn btn-primary"} contenido={"Obtené Crédito"} /><Button class={"btn btn-secondary"} contenido={"Ver detalle de cuotas"}/>
                </div>
           </div>
        </div>
    </div>
  );
}