import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function useTodos(){



//**************  LOGICA QUE QUEREMOS COMPARTIR ************************ */
     // Estado de TodoSearch
    const [searchValueName, setSearchValueName] = React.useState('')
   
    const [searchValueId, setSearchValueId] = React.useState('')
    const [openModalP, setOpenModalP] = React.useState(false)
    const [openModalS, setOpenModalS] = React.useState(false)
    const [openModalDelete, setOpenModalDelete] = React.useState(false)
    const [openModalEdit, setOpenModalEdit] = React.useState(false)
    const [confirm, setConfirm] = React.useState(false)
    const [showPaciente, setShowPaciente] = React.useState(false)
    const [showPacienteDetails,setShowPacienteDetails] = React.useState(false)
    const [pacienteSelected,setpacienteSelected] = React.useState([])
    // Custom HOOK que maneja persistencia con localStorage
    console.log('showPacienteDetails');
    console.log(showPacienteDetails);
    const{
      item:paciente,
      saveItem:savePaciente,
      loading,
      error
    }= useLocalStorage('PACIENTES_V1',[]);
   

    console.log('showPacienteDetails');
    console.log(showPacienteDetails);


const addPaciente = (form) => {
  const newPaciente = [...paciente]
  newPaciente.push(form)
  savePaciente(newPaciente)
  
}

const deletePaciente = (id) => {

      console.log('deletePaciente');
      console.log(id);
      alert('espera')
      
      const pacienteIndex = paciente.findIndex(p => p.identificacion === id);

      console.log('pacienteIndex');
      console.log(pacienteIndex);
      alert('espera')

      const newPaciente = [...paciente]
      newPaciente.splice(pacienteIndex, 1)
      savePaciente(newPaciente)
      setShowPacienteDetails(false)

}

const totalPacientes = paciente.length

let searchedPaciente



if((!searchValueName.length && !searchValueId.length) >=1){
  
    searchedPaciente = paciente
  }else if (searchValueName.length>=1 && !searchValueId.length){
      console.log('valdiacion nombre');
      searchedPaciente = paciente.filter(p => {
      const pacienteName = p.nombre.toLowerCase()
      const searchText = searchValueName.toLowerCase()
      const validacion = pacienteName.includes(searchText)
      return validacion
    
    })}
  
    else if (searchValueId.length >=1 && !searchValueName.length) {
        console.log('valdiacion Id');

        searchedPaciente = paciente.filter(p => {
        const pacienteId = p.identificacion
        const validacion = pacienteId.includes(searchValueId)
        return validacion
      
      })}
      else if ((searchValueName.length && searchValueId.length) >=1) {
        console.log('Doble validacion');
        searchedPaciente = paciente.filter(p => {
        const pacienteId = p.identificacion
        const pacienteName = p.nombre.toLowerCase()
        const searchText = searchValueName.toLowerCase()
        const validacionI = pacienteId.includes(searchValueId)
        const validacionP = pacienteName.includes(searchText)

        if(validacionI && validacionP){
          return true
        }

      
      })}

  const showDetails = (id)=>{
  const pacienteDetails = searchedPaciente.filter(p => {
    const pacienteId = p.identificacion
    const validacion = pacienteId.includes(id)
    return validacion})
    setpacienteSelected(pacienteDetails)
    
    
 }


// if (!searchValueName.length  >=1) {
//   searchedPaciente = paciente
// }else {

//     searchedPaciente = paciente.filter(p => {
//     const pacienteName = p.nombre.toLowerCase()
//     const searchText = searchValueName.toLowerCase()
//     const validacion = pacienteName.includes(searchText)
//     console.log('Esta es la validacion ' + validacion)
//     return validacion
  
//   })}

//   if (!searchValueId.length >=1) {
//     searchedPaciente = paciente
//   }else {
  
//       searchedPaciente = paciente.filter(p => {
//       const pacienteId = p.identificacion
//       const validacion = pacienteId.includes(searchValueId)
//       console.log('Esta es la validacion ' + validacion)
//       return validacion
    
//     })}

/* if (searchValueId.length>=1) {
    searchedPaciente = paciente.filter(p => {
    const pacienteName = p.nombre.toLowerCase()
    const searchText = searchValue.toLowerCase()
    const validacion = pacienteName.includes(searchText)
    console.log('Esta es la validacion ' + validacion)
    return validacion
  
  }) */




const searchePacienteToEdit = (id)=>{
    searchedPaciente = paciente.filter(p => {
    const pacienteId = p.identificacion
    return pacienteId.includes(id)
    })
    console.log('Paciente buscado');
    console.log(searchedPaciente);
  return( searchedPaciente[0])
   
    
    
}

const editPaciente = ({form,id})=>{
  console.log('viene del form');
  console.log(form);
  const index = paciente.findIndex(p =>(
    p.identificacion === id
  ))
  const newPaciente = [...paciente]
  newPaciente[index] = {...form}
  console.log('Copia en LS');  
  console.log(newPaciente);  
  savePaciente(newPaciente)
}


 return{
            paciente,
            totalPacientes,
            searchedPaciente,           
            loading,
            error,
            searchValueName,
            searchValueId,
            setSearchValueName,
            setSearchValueId,
            openModalP,
            setOpenModalP,
            openModalS,
            setOpenModalS,
            addPaciente,
            deletePaciente,
            showPaciente,
            setShowPaciente,
            openModalDelete,
            setOpenModalDelete,
            setConfirm,
            confirm,
            setOpenModalEdit,
            openModalEdit,
            searchePacienteToEdit,
            editPaciente,
            showPacienteDetails,
            setShowPacienteDetails,
            showDetails,
            pacienteSelected
    }
      
}

export { useTodos }


