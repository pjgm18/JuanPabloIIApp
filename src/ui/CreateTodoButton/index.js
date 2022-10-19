import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

 
    // const onClickButtonPaciente = ()=>{
    //     props.setOpenModalP(prevState => !prevState)
    // }

   if(props.loading){
    return null
   }
    return(
        <div className="ButonContainer">
           
             <button
                // Atributo clase para estilos de CSS
                className="CreateTodoButton"
                //Evento de click que ejecutara la funcion onClickButton al darle click al boton
                onClick={props.onClick} 
                >
                    +

                </button>
                   
         
        </div> 
        
    )
}

export { CreateTodoButton }