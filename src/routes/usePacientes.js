import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const fechaJsToSql = (fecha) => {
  // console.log(fecha)
  const mes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const horas = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  const minutosSegundos = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
  // console.log(fecha.getFullYear() + "-" + mes[fecha.getMonth()] + "-" + dias[fecha.getDate() - 1] + " " + horas[fecha.getHours()] + ":" + minutosSegundos[fecha.getMinutes()] + ":" + minutosSegundos[fecha.getSeconds()])
  return fecha.getUTCFullYear() + "-" + mes[fecha.getUTCMonth()] + "-" + dias[fecha.getUTCDate() - 1] + " " + horas[fecha.getUTCHours()] + ":" + minutosSegundos[fecha.getUTCMinutes()] + ":" + minutosSegundos[fecha.getUTCSeconds()];
}
function usePacientes() {

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
  const [showPacienteDetails, setShowPacienteDetails] = React.useState(false)
  const [patito, setPatito] = React.useState('aaaa')
  // Custom HOOK que maneja persistencia con localStorage

 



  const {
    cargando,
    setCargando,
    pacientes,
    loading,
    error,
    setLoading,
    savePaciente,
    edit,
    cosita,
    onSincronize,
    findPacienteByName,
    findPacienteById,
    cargando2,
    setCargando2,
    pacienteSelected,
    prueba
  } = useLocalStorage('PACIENTES_V1', []);


  // const totalPacientes = paciente.length
  let searchedPaciente = pacientes

  // let pacienteSeleccionado = [...pacienteSelected]

  // if(!searchValueName.length && !searchValueId.length) {
  //   searchedPaciente = pacientes
  //   console.log('searchValueName1');

  // } else if (searchValueName.length >= 1 && !searchValueId.length) {
  //   searchedPaciente = pacientes
  //   console.log('searchValueName2');


  //   // onSincronize()
  //   // searchedPaciente = pacientes.filter(p => {
  //   //   const pacienteName = p.nombre.toLowerCase()
  //   //   const searchText = searchValueName.toLowerCase()
  //   //   const validacion = pacienteName.includes(searchText)
  //   //   return validacion

  //   // })
  // } else if (searchValueId.length >= 1 && !searchValueName.length) {
  //   console.log('searchValueName3');


  //   searchedPaciente = pacientes.filter(p => {
  //     const pacienteId = JSON.stringify(p.identificacion)
  //     const validacion = pacienteId.includes(searchValueId)
  //     return validacion

  //   })
  // } else if ((searchValueName.length && searchValueId.length) >= 1) {
  //   searchedPaciente = pacientes.filter(p => {
  //     const pacienteId = JSON.stringify(p.identificacion)
  //     const pacienteName = p.nombre.toLowerCase()
  //     const searchText = searchValueName.toLowerCase()
  //     const validacionI = pacienteId.includes(searchValueId)
  //     const validacionP = pacienteName.includes(searchText)

  //     if (validacionI && validacionP) {
  //       return true
  //     }
  //   })
  //   console.log('searchValueName4');

  // }

  // if (!!pacienteSeleccionado.length && !!showPacienteDetails && !loading) {
  //   pacienteSeleccionado = searchedPaciente.filter(p => {

  //     const pacienteId = JSON.stringify(p.id)
  //     const validacion = pacienteId.includes(pacienteSeleccionado[0].id)
  //     return validacion
  //   })

  // }
 
  const addPaciente = (form) => {
    // const newPaciente = [...paciente]
    // newPaciente.push(form)
    // savePaciente(newPaciente) 
    // form.fechaNacimiento = fechaJsToSql(fechaJsToSql( form.fechaNacimiento))
    console.log(form.fechaNacimiento );
    console.log(typeof(form.fechaNacimiento) );
    
    // setCargando2(true)
    // savePaciente(form)


  }

  const deletePaciente = (id) => {
    console.log('delete pacienteuse');
    setCargando2(true)
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
  const showDetails = (id) => {
    setCargando2(true)
    console.log('showDetails');
    findPacienteById(id)
  }


  const findByName = (name) => {
    setCargando(true)
    findPacienteByName(name)

  }
  const searchePacienteToEdit = (id) => {

    searchedPaciente = pacientes.filter(p => {
      const pacienteId = p.id
      return pacienteId == id
    })
    return (searchedPaciente[0])
  }
  const editPaciente = ({ form, id }) => {
    setCargando2(true)
    edit({ form, id })
  }

  return {
    cargando,
    cargando2,
    prueba,
    setCargando,
    // paciente,
    pacientes,
    // totalPacientes,
    searchedPaciente,
    findByName,
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
    // pacienteSeleccionado,
    onSincronize,
    setPatito,
    patito,
    pacienteSelected,
    prueba
  }

}

export { usePacientes }


