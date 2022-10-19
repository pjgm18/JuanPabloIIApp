import React from 'react';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import {EditIcon } from '../TodoIcon/EditIcon';
import './PacienteItem.css';

function PacienteItem(props){
    return (
        <li className="PacienteItem"> 
          
          <p
            className={`PacienteItem-p ${props.completed && 'PacienteItem-p--complete'}`}
          >
            Nombre: {props.name} <br/>
            apellido: {props.apellido} <br/>
            edad: {props.nacimiento} <br/>
            identificacion: {props.identificacion}<br/>
            telefono: {props.telefono}<br/>
            direccion: {props.direccion}<br/>
            eps: {props.eps}<br/>
            sintomatologia: {props.sintomatologia}<br/>
            examenes: {props.examenes}<br/>
            correo: {props.correo}<br/>
            Fecha de registro: {props.registro}<br/>
          </p>
          <div>
          <DeleteIcon
            onDelete={props.onDelete}
          />
          <EditIcon
            onEdit={props.onEdit}
          />
        
          </div>
          
        </li>
      );
}


export { PacienteItem}