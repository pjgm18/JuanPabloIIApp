import React from "react";
import './FilasTablaPacientes.css'

function FilasTablaPacientes(props) {

  const onClickName = () => { 
   
    props.onShowDetails()
    
    // props.showDetails(props.id)
  }

  // if(props.loading){
  //   return <p> cargando-.....</p>
  // }
  return (
    <tr>
      <td
        className="table__top-left"
        onClick={onClickName}
      >
        {props.nombre}
      </td>
      <td
        className="table__top-right"
      >
        {props.id}
      </td>
    </tr>
  )

}

export { FilasTablaPacientes }