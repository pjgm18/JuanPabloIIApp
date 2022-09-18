import React from "react";
import './TodoForm.css'

function TodoForm({addTodo,setOpenModalT}){
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onChange=(event)=>{
        setNewTodoValue (event.target.value)
    }

    const onCancel = ()=>{
        setOpenModalT(false)
    }
    const onSubmit = (event)=>{
        // No vamos a recargar la pagina o tratar de enviar nuestros datos a alguna parte
        if (!newTodoValue) {
            event.preventDefault()
        } else {
            event.preventDefault()
            addTodo(newTodoValue)
            setOpenModalT(false) 
        }
       
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value = {newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }