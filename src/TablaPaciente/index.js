import React from "react";
import './TablaPacientes.css'

function TablaPaciente(props){
  const onClickName = ()=>{
    
    props.onShowDetails(true)
    props.showDetails(props.id)
    
    
  }

  // if(props.loading){
  //   return <p> cargando-.....</p>
  // }
    return(
        <tr>
          <td
            className="table__top-left"
            onClick={onClickName}
          >
            {props.nombre}
          </td>
          <td 
            className="table__top-right table__right"
          >
            {props.id}
          </td>
        </tr>
            )
    
}

export { TablaPaciente}