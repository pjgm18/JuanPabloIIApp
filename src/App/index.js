import React from "react";
import axios from 'axios'
import { TodoHeader } from "../TodoHeader";
import { Options } from "../Options";
import { RegistroButton } from "../Buttons/RegistroButton";
import { ExamenesButton } from "../Buttons/ExamenesButton";
import { Titulo } from "../Title";
import { PacienteList, TodoList } from "../PacienteList";
import { EmptyTodos} from "../EmptyTodos"
import { TodosLoading} from "../TodosLoading"
import { TodosError} from "../TodosError"
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal} from "../Modal"
import { PacienteSearch} from "../PacienteSearch"
import { FormPaciente} from "../TodoForm/FormPaciente"
import { PacienteItem } from "../PacienteItem/index";
import { DeleteModal}  from "../TodoForm/DeleteModal"
import { EditModal}  from "../TodoForm/EditModal"
import { useTodos } from "./usePaciente";
import { Table } from "../Table";
import { TablaPaciente } from "../TablaPaciente";

// const api = axios.create({
//   baseURL : 'http://localhost:3003/',
//   headers:{
//       'Content-Type': 'aplication/json;charset=utf-8'
//   },

// })


  // const pacientes = data.results
  






// let i= 0;
// const defaultTodos = [
//   {text= 'Cortar cebolla', completed= t
//   {text= 'comprar agua', completed= t
//   {text= 'compar agua', completed= t
//   {text= 'comprr agua', completed= t
//   {text= 'Hacer ejercicio', completed= f
// ]

//Componente principal que regresa varios componentes
function App() {
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
    pacienteSeleccionado
} = useTodos()




  return(


    <React.Fragment>
      
      <TodoHeader>
        <Titulo/>
      </TodoHeader>
      <Options>
        <RegistroButton
          setShowPaciente={setShowPaciente}
        />
        <ExamenesButton/>
      </Options>
      


      

      { showPaciente && 
        <>
          <h2>Pacientes</h2>
          {!showPacienteDetails && 
          <>
          <PacienteSearch
          setSearchValueName={setSearchValueName}
          setSearchValueId={setSearchValueId}
          />
          <Table>
            {searchedPaciente.map(p=>(
              <TablaPaciente
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
              
              onEdit = {()=>{setOpenModalEdit(true)
               setConfirm(p._id)}
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

      }
            
            
        

        
        {!!openModalP && 
            <Modal>
            <FormPaciente
                setOpenModalP={setOpenModalP}
                addPaciente={addPaciente}
                paciente={pacientes}
            />
            </Modal>}


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
            setLoading2={setLoading2}
            setLoading={setLoading}
            setOpenModalEdit={setOpenModalEdit}
            editPaciente={editPaciente}
            paciente={paciente}
            setpacienteSelected={setpacienteSelected}
            pacienteSelected={pacienteSelected}
            pacienteToEdit={searchePacienteToEdit(confirm)}
            />
            </Modal>}

        <CreateTodoButton

           
            setOpenModalP = {setOpenModalP}
            setShowPaciente = {setShowPaciente}
            showPaciente = {showPaciente}
            /* setOpenModalS = {setOpenModalS} */
        />
        

    </React.Fragment>


)
}

export default App;
