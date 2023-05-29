import moment from 'moment/moment';
import React from 'react';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import './PacienteItem.css';

function PacienteItem(props) {

  const fechaString = props.nacimiento
  console.log(props.nacimiento);
  const fecha = new Date(fechaString);
  let fechaFormateada
  let error = false
  try {
     fechaFormateada = fecha.toISOString().split("T")[0];
     var fechaNacimiento = moment(fechaFormateada, "YYYY-MM-DD");
     var anioNacimiento = fechaNacimiento.year();
     var anioActual = moment().year();
     var edad = anioActual - anioNacimiento;
  } catch (error) {
    edad = fechaString
  
  }
  
const paciente = props.paciente
// console.log(p);

    // paciente.nombre,
    // paciente.apellidos,
    // paciente.cedula,
    // paciente.telefono,
    // paciente.fechaNacimiento,
    // paciente.sexo,
    // paciente.email,
    // paciente.direccion,
    // paciente.medico,
    // paciente.medicamentos,
    // paciente.afiliacion,
    // paciente.fechaConsulta   



  return (
    <div className='PacienteItem-container'>
      <table className="PacienteItem-table">
        <tbody>
          <tr>
            <th>Nombre:</th>
            <td>{paciente.nombre}</td>
          </tr>
          <tr>
            <th>Apellido:</th>
            <td>{paciente.apellidos}</td>
          </tr>
          <tr>
            <th>Cedula:</th>
            <td>{paciente.cedula}</td>
          </tr>
          <tr>
            <th>Teléfono:</th>
            <td>{paciente.telefono}</td>
          </tr>
          <tr>
            <th>Edad:</th>
            <td>{edad}</td>
          </tr>
          <tr>
            <th>Sexo:</th>
            <td>{paciente.sexo}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{paciente.email}</td>
          </tr>
          <tr>
            <th>Dirección:</th>
            <td>{paciente.direccion}</td>
          </tr>
          <tr>
            <th>Medico:</th>
            <td>{paciente.medico}</td>
          </tr>
          <tr>
            <th>EPS:</th>
            <td>{props.eps}</td>
          </tr>
          <tr>
            <th>Medicamentos:</th>
            <td>{paciente.medicamentos}</td>
          </tr>
          <tr>
            <th>Afiliacion:</th>
            <td>{paciente.afiliacion}</td>
          </tr>
        
          {/* <tr>
            <th>Fecha de registro:</th>
            <td>{props.registro}</td>
          </tr> */}
        </tbody>
      </table>
      <DeleteIcon
        onDelete={props.onDelete}
      />
      <EditIcon
        onEdit={props.onEdit}
      />

    </div>




    // <li className="PacienteItem"> 

    //   <p
    //     className={`PacienteItem-p ${props.completed && 'PacienteItem-p--complete'}`}
    //   >
    //     Nombre: {props.name} <br/>
    //     apellido: {props.apellido} <br/>
    //     edad: {props.nacimiento} <br/>
    //     identificacion: {props.identificacion}<br/>
    //     telefono: {props.telefono}<br/>
    //     direccion: {props.direccion}<br/>
    //     eps: {props.eps}<br/>
    //     sintomatologia: {props.sintomatologia}<br/>
    //     examenes: {props.examenes}<br/>
    //     correo: {props.correo}<br/>
    //     Fecha de registro: {props.registro}<br/>
    //   </p>
    //   <div>
    //   <DeleteIcon
    //     onDelete={props.onDelete}
    //   />
    //   <EditIcon
    //     onEdit={props.onEdit}
    //   />

    //   </div>

    // </li>
  );
}


export { PacienteItem }