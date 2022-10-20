import React from "react";
import { useLocalStorage } from "./useLocalStorage";


function usePacientes(){
 


//**************  LOGICA QUE QUEREMOS COMPARTIR ************************ */
     // Estado de TodoSearch
    const [searchValueName, setSearchValueName] = React.useState('')
   
    const [searchValueId, setSearchValueId] = React.useState('')
    const [loading2, setLoading2] = React.useState(false)
    const [openModalP, setOpenModalP] = React.useState(false)
    const [openModalS, setOpenModalS] = React.useState(false)
    const [openModalDelete, setOpenModalDelete] = React.useState(false)
    const [openModalEdit, setOpenModalEdit] = React.useState(false)
    const [confirm, setConfirm] = React.useState(false)
    const [showPaciente, setShowPaciente] = React.useState(false)
    const [showPacienteDetails,setShowPacienteDetails] = React.useState(false)
    const [pacienteSelected,setpacienteSelected] = React.useState([])
    // Custom HOOK que maneja persistencia con localStorage
    
    
    const{
      pacientes,
      loading,
      error,
      setLoading,
      savePaciente,
      edit,
      cosita,
      onSincronize
    }= useLocalStorage('PACIENTES_V1',[]);
   


     


const addPaciente = (form) => {
  // const newPaciente = [...paciente]
  // newPaciente.push(form)
  // savePaciente(newPaciente) 
  savePaciente(form)

  
}
 
const deletePaciente = (id) => {
  onSincronize()
  cosita(id)
  // console.log('deletep')
  // console.log(deletePacientes)
  // deletePacientes(id)

  // const pacienteIndex = paciente.findIndex(p => p.identificacion === id);
  // const newPaciente = [...paciente]
  // newPaciente.splice(pacienteIndex, 1)
  // savePaciente(newPaciente)
  // setShowPacienteDetails(false)

}

// const totalPacientes = paciente.length

let searchedPaciente
let pacienteSeleccionado = [...pacienteSelected]


if((!searchValueName.length && !searchValueId.length) >=1){
  
    searchedPaciente = pacientes
  }else if (searchValueName.length>=1 && !searchValueId.length){
      
      searchedPaciente = pacientes.filter(p => {
      const pacienteName = p.nombre.toLowerCase()
      const searchText = searchValueName.toLowerCase()
      const validacion = pacienteName.includes(searchText)
      return validacion
    
    })}
  
    else if (searchValueId.length >=1 && !searchValueName.length) {
        

        searchedPaciente = pacientes.filter(p => {
        const pacienteId = JSON.stringify(p.identificacion)
        const validacion = pacienteId.includes(searchValueId)
        return validacion
      
      })}
      else if ((searchValueName.length && searchValueId.length) >=1) {
        
        searchedPaciente = pacientes.filter(p => {
        const pacienteId = JSON.stringify(p.identificacion)
        const pacienteName = p.nombre.toLowerCase()
        const searchText = searchValueName.toLowerCase()
        const validacionI = pacienteId.includes(searchValueId)
        const validacionP = pacienteName.includes(searchText)

        if(validacionI && validacionP){
          return true
        }

      
      })}

      
 

  
    if(!!pacienteSeleccionado.length && !!showPacienteDetails && !loading){
    

      pacienteSeleccionado = searchedPaciente.filter(p => {
      const pacienteId = JSON.stringify(p._id)        
    
      const validacion = pacienteId.includes(pacienteSeleccionado[0]._id)
      return validacion})
      
    }
  
  const showDetails = (id)=>{
    const pacienteDetails = searchedPaciente.filter(p => {
    const pacienteId = p._id
    
    const validacion = pacienteId.includes(id)
    return validacion})
    return pacienteDetails
    

    
      
    
 }

// if (!searchValueName.length  >=1) {
//   searchedPaciente = paciente
// }else {

//     searchedPaciente = paciente.filter(p => {
//     const pacienteName = p.nombre.toLowerCase()
//     const searchText = searchValueName.toLowerCase()
//     const validacion = pacienteName.includes(searchText)
//     
//     return validacion
  
//   })}

//   if (!searchValueId.length >=1) {
//     searchedPaciente = paciente
//   }else {
  
//       searchedPaciente = paciente.filter(p => {
//       const pacienteId = p.identificacion
//       const validacion = pacienteId.includes(searchValueId)
//       
//       return validacion
    
//     })}

/* if (searchValueId.length>=1) {
    searchedPaciente = paciente.filter(p => {
    const pacienteName = p.nombre.toLowerCase()
    const searchText = searchValue.toLowerCase()
    const validacion = pacienteName.includes(searchText)
    
    return validacion
  
  }) */




const searchePacienteToEdit = (id)=>{
    
    
    searchedPaciente = pacientes.filter(p => {
    const pacienteId = p._id
    return pacienteId.includes(id)
    })
    
    
  return( searchedPaciente[0])
   
    
    
}

const editPaciente = ({form,id})=>{
  
  onSincronize()
  console.log('editPaciente');
  console.log(form);
  console.log(id);
  edit({form, id})
}

 return{
            // paciente,
            pacientes,
            // totalPacientes,
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
            pacienteSelected,
            setLoading2,
            setLoading,
            setpacienteSelected,
            pacienteSeleccionado,
            onSincronize
    }
      
}

export { usePacientes }


