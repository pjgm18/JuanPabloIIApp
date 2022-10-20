import React from "react";
import { PacienteList} from "../../ui/PacienteList";
import { EmptyTodos} from "../../ui/EmptyTodos"
import { TodosLoading} from "../../ui/TodosLoading"
import { TodosError} from "../../ui/TodosError"
import { PacienteItem } from "../../ui/PacienteItem/index";
import { DeleteModal}  from "../../ui/TodoForm/DeleteModal"
import { Modal} from "../../ui/Modal"
import {useNavigate,useParams} from 'react-router-dom'
import { usePacientes } from "../usePacientes";

function PacienteDetails(){
    const params = useParams()
    const navigate = useNavigate()

    const {
        todos,
        paciente,
        pacientes,
        totalPacientes,
        loading,
        error,
        searchedTodos,
        setOpenModalT,
        openModalP,
        totalTodos, 
        completdTodos,
        searchValueName,
        searchValueId,
        setSearchValueName,
        setSearchValueId,
        setSearchValue,
        openModalS,
        setOpenModalP,
        setOpenModalS,
        showPaciente,
        setShowPaciente,
        confirmDelete,
        deletePaciente,
        openModalDelete,
        setOpenModalDelete,
        confirm,
        setConfirm,
        editPaciente,
        setOpenModalEdit,
        openModalEdit,
        searchePacienteToEdit,
        addPaciente,
        searchedPaciente,
        setShowPacienteDetails,
        showPacienteDetails,
        showDetails,
        pacienteSelected,
        setLoading,
        setLoading2,
        setpacienteSelected,
        pacienteSeleccionado,
        
    } = usePacientes()

    const persona = showDetails(params.slug)
   
    return( 
     
        <>
            <h1>PacienteDetails</h1>
            <PacienteList
                error={error}
                loading={loading}
                totalPacientes={totalPacientes}
                pacienteSeleccionado = { persona}
                searchText={searchValueName}
                onError={() => <TodosError />}
                onLoading={() => <TodosLoading />}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearchResults={
                (searchText) => 
                    <p>No hay resultados para  <span style={{color:"red"}}
                    >
                        {searchText}
                    </span>
                    </p>
                }
            >
            {/* Render function */}
            {p =>(    
                <PacienteItem 
                key = {p.identificacion} // Identificador unico
                name = {p.nombre}
                apellido = {p.apellido}
                nacimiento = {p.nacimiento}
                identificacion = {p.identificacion}
                telefono = {p.telefono}
                direccion = {p.direccion}
                eps = {p.eps}
                sintomatologia = {p.sintomatologia}
                examenes = {p.examenes}
                correo = {p.correo}
                registro = {p.registro}
                onDelete = {()=>{setOpenModalDelete(true)
                setConfirm(p._id)}}
                onEdit = {()=>{
                navigate('/edit/' + p._id, )
            
                // setOpenModalEdit(true)
                //  setConfirm(p._id)
            }
                }
            />
            )
            }

            </PacienteList>
                <button
                    onClick= {()=>{navigate(-1)}}
                >
                    Regresar
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
export { PacienteDetails}