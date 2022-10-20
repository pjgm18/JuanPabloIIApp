import React from "react";
import { FormPaciente } from "../../ui/TodoForm/FormPaciente";
import { usePacientes } from "../usePacientes";

function NewPacientePage(){
    const {
        addPaciente,
        pacientes
    }=usePacientes()

    return (
        <FormPaciente
        addPaciente={addPaciente}
        pacientes={pacientes}
        
        />
    )
    
}
export { NewPacientePage}