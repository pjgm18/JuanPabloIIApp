
import React from "react";
const API = 'http://localhost:3003/'

//Custom HOOK para persistencia de datos
function useLocalStorage(itemName, initialValue,showPacienteDetails){

  const[error, setError] = React.useState(false)
  const[loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)
  const [pacientes, setPacientes] = React.useState(initialValue)

  const getPacientes = async () => {
		
    const data = await (await fetch(`${API}paciente`)).json();
    const pacientes = data.body
    setPacientes(pacientes)
  }
  const savePaciente = async (form)=>{
        const paciente = {
          nombre:form.nombre,
          apellido:form.apellido,
          nacimiento:form.nacimiento,
          identificacion:form.identificacion,
          telefono:form.telefono,
          direccion:form.direccion,
          sintomatologia:form.sintomatologia,
          examenes:form.examenes,
          correo:form.correo,
          registro:form.registro,
        };
        try {
          await fetch(`${API}paciente`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(paciente),
          });
          const newPaciente = [...pacientes]
          newPaciente.push(paciente)
          setPacientes(newPaciente)
  
        } catch (error) {
          setError(error)
  
        }
  
        
        // setMessageToSend('');
      
    
  }
  const editPaciente = async ({form,id})=>{
        const paciente = {
          nombre:form.nombre,
          apellido:form.apellido,
          nacimiento:form.nacimiento,
          identificacion:form.identificacion,
          telefono:form.telefono,
          direccion:form.direccion,
          eps:form.eps,
          sintomatologia:form.sintomatologia,
          examenes:form.examenes,
          correo:form.correo,
          registro:form.registro,
        };
        
        try {
          await fetch(`${API}paciente/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(paciente),
          });
          const index = paciente.findIndex(p =>(
            p.identificacion === id
          ))
          const newPaciente = [...paciente]
          newPaciente[index] = {...form}
          savePaciente(newPaciente)
  
        } catch (error) {
          setError(error)
  
        }
  
        
        // setMessageToSend('');
      
    
  }
const cosita = async (id)=>{
      
        await fetch(`${API}paciente/${id}`, {
          method: 'DELETE', 
        });
        // const pacienteIndex = pacientes.findIndex(p => p.identificacion === id);
        // const newPaciente = [...pacientes]
        // newPaciente.splice(pacienteIndex, 1)
        // savePaciente(newPaciente)
   }


  // e
  React.useEffect(()=>{
   
    console.log('useEffect 1');
    setTimeout(() => {
     try {
      getPacientes()
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItem;
    
      // Se verifica si es la primera vez queel}} el usuario utiliza la aplicacion
      // Si no existe (es decir si es null, undefinde, false o un String vacio)
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
      }else{
        parsedItem = JSON.parse(localStorageItem)
        
    
      }
      
      setItem(parsedItem)
      setLoading(false)
     } catch (error) {
        setError(error)
     }
    }, 3000);
  },[showPacienteDetails])

   
    // Estado de l item que estemos llamando de localStorage, se utiliza para traer la informacion mas actualizada de localStorage

  
    //Esta funcion hace un puente para conectar el estado del item y el localStorage para (Actualizar) completar y eliminar Todos con las funciones respectivas
    const saveItem= (newItem) =>{
  
      try {

        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)

      } catch (error) {
        setError(error)

      }
    }
    
  
      return { 
        item,
        saveItem,
        loading,
        error,
        pacientes,
        savePaciente,
        editPaciente,
        cosita
       }
  
}
  
  export { useLocalStorage}




  


















