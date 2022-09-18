import React from "react";
import './TablaPacientes.css'

function TablaPaciente(props){
  const onClickName = ()=>{
    console.log('holaaaaa');
    props.onShowDetails(true)
    props.showDetails(props.id)
    
    
  }


    return(
        <tr>
          <td
            class="table__top-left"
            onClick={onClickName}
          >
            {props.nombre}
          </td>
          <td 
            class="table__top-right table__right"
          >
            {props.id}
          </td>
        </tr>
            )
    
}

export { TablaPaciente}