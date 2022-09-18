import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){

    /* Para tener el return de la funcion mas limpio en esta parte podemos crear las funciones */
    const onClickButtonTodo = () =>{
        // Los actualziadores de estado nos permiten:
        // Enviar true o false 
        // Tambien nos permiten enviar una funcion que nos va a devolver el estado anterior a nuestra actualizacion, Entonces retornamos un valor para que se actualice nuevamente nuestro estado
        props.setOpenModalT(prevState => !prevState)
    }
    const onClickButtonPaciente = ()=>{
        props.setOpenModalP(prevState => !prevState)
    }

   const onClickButtonShowPaciente = ()=>{
    props.setShowPaciente(true)
    props.setShowTodo(false)
   }
   
   const onClickButtonShowTodo = ()=>{
    props.setShowPaciente(false)
    props.setShowTodo(true)
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