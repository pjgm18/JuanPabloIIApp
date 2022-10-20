import React from "react";
import { EditModal } from "../../ui/TodoForm/EditModal";
import { usePacientes } from "../usePacientes";
import { useParams} from "react-router-dom"


function EditPacientePage(){

    const params = useParams()
    const id = params.id

    const {
        editPaciente,
        searchePacienteToEdit,
        pacientes,setLoading,loading,onSincronize
    }=usePacientes()
    
    console.log('laoding');
    console.log(loading); 
    
    if(loading){
        return <p>cargando...</p>
    }else{
        const pacienteToEdit= searchePacienteToEdit(id)

      
        return ( 
            <EditModal
            pacienteToEdit={pacienteToEdit}
            pacientes={pacientes}
            onSubmit={(form)=>{
            console.log(form);
            editPaciente({form,id})}}
            setLoading={setLoading}
            loading={loading}
            />
            
        ) 
    }
    
    
   
   



   
}
export { EditPacientePage}