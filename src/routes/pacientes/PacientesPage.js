import React from "react";
import { TodoHeader } from "../../ui/TodoHeader";
import { Options } from "../../ui/Options";
import { RegistroButton } from "../../ui/Buttons/RegistroButton";
import { ExamenesButton } from "../../ui/Buttons/ExamenesButton";
import { Titulo } from "../../ui/Title";
import { PacienteList, TodoList } from "../../ui/PacienteList";
import { EmptyTodos} from "../../ui/EmptyTodos"
import { TodosLoading} from "../../ui/TodosLoading"
import { TodosError} from "../../ui/TodosError"
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { Modal} from "../../ui/Modal"
import { PacienteSearch} from "../../ui/PacienteSearch"
import { FormPaciente} from "../../ui/TodoForm/FormPaciente"
import { PacienteItem } from "../../ui/PacienteItem/index";
import { DeleteModal}  from "../../ui/TodoForm/DeleteModal"
import { EditModal}  from "../../ui/TodoForm/EditModal"

import { Table } from "../../ui/Table";
import { TablaPaciente } from "../../ui/TablaPaciente";
import {useNavigate} from 'react-router-dom'
import { usePacientes } from "../usePacientes";

function PacientesPage() {
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


if(loading){
    return <p> Caragando......</p>
}

  return(


    <React.Fragment>
      
      <TodoHeader>
        <Titulo/>
      </TodoHeader>
      
      


      

    
     
        <>
          <h2>Pacientes</h2>
          {!showPacienteDetails && 
          <>
          <PacienteSearch
          setSearchValueName={setSearchValueName}
          setSearchValueId={setSearchValueId}
          />
          <Table
          loading={loading}
          >
            {searchedPaciente.map(p=>(
              <TablaPaciente
              loading={loading}
                key={p.identificacion}
                nombre ={p.nombre}
                id = {p.identificacion}
                onShowDetails={setShowPacienteDetails}
                showDetails={showDetails}
              />
              ))
            }
                               
          </Table>
         
          
          </>
          }

          {showPacienteDetails && 
          <>
            <PacienteList
          error={error}
          loading={loading}
          totalPacientes={totalPacientes}
          pacienteSeleccionado = { pacienteSeleccionado}
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
              onClick= {()=>{setShowPacienteDetails(false)}}
            >
              Regresar
            </button>
          </>} 
           
            
          
        </>

      
      
            
            
        

        
        {/* {!!openModalP && 
            <Modal>
            <FormPaciente
            setLoading={setLoading}
                setOpenModalP={setOpenModalP}
                addPaciente={addPaciente}
                pacientes={pacientes}
            />
            </Modal>} */}


        {!!openModalDelete && 
            <Modal>
            <DeleteModal
               
                setOpenModalDelete={setOpenModalDelete}
                deletePaciente={deletePaciente}
                confirm={confirm}
                setShowPacienteDetails={setShowPacienteDetails}
            />
            </Modal>}
        {!!openModalEdit && 
            <Modal>
                
            <EditModal
            loading={loading}
            setLoading2={setLoading2}
            setLoading={setLoading}
            setOpenModalEdit={setOpenModalEdit}
            editPaciente={editPaciente}
            pacientes={pacientes}
            setpacienteSelected={setpacienteSelected}
            pacienteSelected={pacienteSelected}
            pacienteToEdit={searchePacienteToEdit(confirm)}
            />
            </Modal>}

        <CreateTodoButton
            onClick={()=>navigate('/NewPacientePage')}

        //    loading={loading}
            // setOpenModalP = {setOpenModalP}
            // setShowPaciente = {setShowPaciente}
            // showPaciente = {showPaciente}
            /* setOpenModalS = {setOpenModalS} */
        />
        

    </React.Fragment>


)
}

export  {PacientesPage};
