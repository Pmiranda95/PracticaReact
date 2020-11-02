import React, {useContext } from 'react';
import Slider from './Slider';
import './viewCredito.css';
import CreditoContext from './context' ;


export default function Monto(props) {
  const {changeSliderValueMonto,changeSliderValuePlazo} = useContext(CreditoContext);
  const {montoTotal,plazo} = useContext(CreditoContext);

  const onChangeSlider = value =>{
    if(props.id==="idMonto"){
        changeSliderValueMonto(value);
    }
    if(props.id==="idPlazo"){
        changeSliderValuePlazo(value);
    }
  } 

  return (
    <div className="monto">
        <div className="montoContent">
            <div className="nameMontoTotal">
                <p>{props.nombre}</p> <input type="text" name="currency" value={props.nombre==="MONTO TOTAL"?"$ "+montoTotal:plazo} />
            </div>    
        <Slider id={props.id} onChangeMonto={onChangeSlider}  monto={montoTotal} min={props.min} max={props.max}/>
        </div> 
    </div>
  );
}