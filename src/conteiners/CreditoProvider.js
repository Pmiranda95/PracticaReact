import React, {useState}from 'react';
import CreditoContext from '../context'

const CreditoProvider = ({children}) => {

    const changeSliderValueMonto = (value) =>{
            setValores(prevState =>{
                return {...prevState,montoTotal:value};
            })        
    }
    const changeSliderValuePlazo = (value) =>{
        setValores(prevState=>{
            return {...prevState,plazo:value}
        })
    }

    const creditoStates = {
        montoTotal:5000,
        plazo:3,
        changeSliderValueMonto,
        changeSliderValuePlazo
    }

    const[credito,setValores] = useState(creditoStates);

return (<CreditoContext.Provider value={{...credito}}>{children}</CreditoContext.Provider>) 
} 

export default CreditoProvider ;