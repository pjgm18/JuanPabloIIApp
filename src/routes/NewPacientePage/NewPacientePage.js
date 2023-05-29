import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormPaciente } from "../../ui/TodoForm/FormPaciente";
import { TodosLoading } from "../../ui/TodosLoading";
import { usePacientes } from "../usePacientes";

function NewPacientePage() {

    const {
        addPaciente,
        pacientes,
        cargando2,
        prueba
    } = usePacientes()
    const navigate = useNavigate() 
useEffect(()=>{
    if (prueba) {
         navigate('/pacientes')
    }
   
   })
if (cargando2) {
   return (
        <TodosLoading></TodosLoading>
    )
}

   
  

    return (
        <>
            <h2 style={{ textAlign: 'center', marginTop :'50px' }}>Nuevo paciente</h2>
            <FormPaciente
                addPaciente={addPaciente}
                pacientes={pacientes}
            />
        </>
    )

    

}
export { NewPacientePage }