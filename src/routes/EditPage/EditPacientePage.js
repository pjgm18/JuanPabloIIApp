import React from "react";
import { EditModal } from "../../ui/TodoForm/EditModal";
import { usePacientes } from "../usePacientes";
import { useLocation, useParams } from "react-router-dom"


function EditPacientePage() {

    const params = useParams()
    const id = params.id
    const location = useLocation()


    const {
        editPaciente,
        searchePacienteToEdit,
        pacientes, 
        setLoading, 
        loading, 
        onSincronize,
        cargando2,
        pacienteSelected,
        showDetails
    } = usePacientes()

    let persona = []
    // console.log(loading);
    

    if (location.state?.p) {
        persona = [location.state.p]
    } else if (!pacienteSelected.length && !cargando2) {
        console.log(loading);
        showDetails(params.id)
        console.log('posshow');


    }
    else {
        persona = pacienteSelected
    }


    if (cargando2) {
        return <p>cargando...</p>
    } else {
        const pacienteToEdit = persona


        return (
            <>
                <h2 style={{ textAlign: 'center', marginTop: '50px' }}>EditPaciente Page</h2>

                <EditModal
                    pacienteToEdit={pacienteToEdit}
                    cargando2 = {cargando2}
                    onSubmit={(form) => {
                        editPaciente({ form, id })
                    }}
                    setLoading={setLoading}
                    loading={loading}
                />
            </>


        )
    }








}
export { EditPacientePage }