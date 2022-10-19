import React from "react";

function RegistroButton(props){
    const onclick = ()=>{
        props.setShowPaciente(true)
        console.log('Muestra los pacientes');
    } 
    

    return(
        <button
        onClick={()=>{onclick()}}
        
        >
            Registro de Pacientes
        </button>
    )
}

export { RegistroButton}