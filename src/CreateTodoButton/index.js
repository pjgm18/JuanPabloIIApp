import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

 
    const onClickButtonPaciente = ()=>{
        props.setOpenModalP(prevState => !prevState)
    }

   
    return(
        <div className="ButonContainer">
           
             <button
                // Atributo clase para estilos de CSS
                className="CreateTodoButton"
                //Evento de click que ejecutara la funcion onClickButton al darle click al boton
                onClick={onClickButtonPaciente} 
                >
                    +

                </button>
                   
         
        </div> 
        
    )
}

export { CreateTodoButton }