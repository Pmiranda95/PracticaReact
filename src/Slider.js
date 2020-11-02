import Slider from 'rc-slider';
import React, { useContext } from 'react';
import 'rc-slider/assets/index.css';
import './viewCredito.css';
import CreditoContext from './context' ;

export default function  SliderGenerico(props) {
 const {montoTotal,plazo} = useContext(CreditoContext);
 
 const marks = {
   0:<strong>{5000}</strong>,
   100:<strong>{50000}</strong>
 }

 const onSliderChange = value => {
  props.onChangeMonto(value);
} 

  return (
    <div>
        <Slider 
          className="slider"
          value={props.id=="idMonto"?montoTotal:plazo}	
          onChange={onSliderChange}
          min={props.min}
          max={props.max}
        />
        <div className="rangos">
          <nav>{props.id==="idMonto"? "$"+props.min:props.min}</nav><nav>{props.id==="idMonto"?"$"+props.max:props.max}</nav>
        </div>
    </div>
  );
  }