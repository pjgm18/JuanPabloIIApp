import React from "react";
import './TodoForm.css'

function DeleteModal({
    setOpenModalDelete,
    deletePaciente,
    confirm:id,
    setShowPacienteDetails
})


{
    console.log('id')
        console.log(id)
    

   

    const onCancel = ()=>{
        setOpenModalDelete(false)
    }
    const acept = (id)=>{
         setOpenModalDelete(false)
        deletePaciente(id)
        setShowPacienteDetails(false)
        // setOpenModalDelete(false)
        
        
        
       
    }

    return(
        <form>
            <label>Esta seguro que desea eliminar el paciente?</label>
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
                onClick={()=>{acept(id)}}
                >
                Aceptar
                </button>
            </div>
        </form>
            
    
    )
}

export { DeleteModal }