import React from 'react'
import './viewCredito.css';

export default function Button(props) {
    return (
        <button type="button" className={props.class}>{props.contenido}</button>
    )
}
