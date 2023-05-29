import React, { useEffect } from "react";
import { PacienteList } from "../../ui/PacienteList";
import { TodosLoading } from "../../ui/TodosLoading"
import { TodosError } from "../../ui/TodosError"
import { PacienteItem } from "../../ui/PacienteItem/index";
import { DeleteModal } from "../../ui/TodoForm/DeleteModal"
import { Modal } from "../../ui/Modal"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { usePacientes } from "../usePacientes";
import './PacienteDetails.css'


function PacienteDetails() {
    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if (prueba) {
             navigate('/pacientes')
        }
       
       })
    const {
        totalPacientes,
        loading,
        error,
        searchValueName,
        deletePaciente,
        openModalDelete,
        setOpenModalDelete,
        confirm,
        setConfirm,
        setShowPacienteDetails,
        loading2,
        showDetails,
        pacienteSelected,
        cargando2,
        prueba
    } = usePacientes()


    let persona = []
    // console.log(loading);

    if (location.state?.p) {
        console.log('location');

        persona = [location.state.p]
    } else if (!pacienteSelected.length && !cargando2) {
        showDetails(params.id)


    }
    else {
        console.log('persona');
        persona = pacienteSelected
    }



    return (
        <>
            <h2 style={{ textAlign: 'center',marginTop: '50px' }}>PacienteDetails</h2>
            <PacienteList
                error={error}
                loading={loading}
                cargando2={cargando2}
                totalPacientes={totalPacientes}
                pacienteSeleccionado={persona}
                searchText={searchValueName}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptySearchResults={
                    (searchText) =>
                        <p>No hay resultados para  <span style={{ color: "red" }}
                        >
                            {searchText}
                        </span>
                        </p>
                }
            >
                {/* Render function */}
                {p => (
                    <PacienteItem
                        key={p.id} // Identificador unico
                        id={p.id}
                        paciente = {p}
                        name={p.nombre}
                        apellido={p.apellidos}
                        nacimiento={p.fechaNacimiento}
                        identificacion={p.cedula}
                        telefono={p.telefono}
                        direccion={p.direccion}
                        eps={p.afiliacion}
                        // sintomatologia={p.sintomatologia}
                        // examenes={p.examenes}
                        correo={p.email}
                        registro={p.fechaRegistro}
                        onDelete={() => {
                            setOpenModalDelete(true)
                            setConfirm(p.id)
                        }}
                        onEdit={() => {
                            navigate('/edit/' + p.id,
                            {
                                state: {p}
                              })

                            // setOpenModalEdit(true)
                            //  setConfirm(p._id)
                        }
                        }
                    />
                )
                }

            </PacienteList>
            <button 
              onClick={() => { navigate('/pacientes/') }}
            className="back-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
                <span>Regresar</span>
            </button>
        
            {!!openModalDelete &&
                <Modal>
                    <DeleteModal
                        setOpenModalDelete={setOpenModalDelete}
                        deletePaciente={deletePaciente}
                        confirm={confirm}
                        setShowPacienteDetails={setShowPacienteDetails}
                    />
                </Modal>}
        </>
    )
}
export { PacienteDetails }