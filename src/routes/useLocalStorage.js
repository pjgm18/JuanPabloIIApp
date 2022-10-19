
import React from "react";
const API = 'http://localhost:3003/'

//Custom HOOK para persistencia de datos
function useLocalStorage(itemName, initialValue){

  const [state,dispatch] = React.useReducer(reducer,initialState({initialValue}))

  const{
        error,
        loading,
        pacientes,
      }=state




//  ACTION CREATORS
const onError=(error)=>{ dispatch({type:actionTypes.error,payload:error})}

const onUpdate=(newPaciente)=>{dispatch ({type:actionTypes.addPaciente, payload:newPaciente})
}

const onLoading = ()=>{dispatch({type:actionTypes.loading})}

const onSincronize = ()=>{
  console.log('Sincronizando');
  dispatch({
    type:actionTypes.sincronize
  })
}




  const getPacientes = async () => {
		
    const data = await (await fetch(`${API}paciente`)).json();

    const pacientes = data.body
    onUpdate(pacientes)
    onLoading()
    
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
          onSincronize()
          // const newPaciente = [...pacientes]
          // newPaciente.push(paciente)
          // onUpdate(newPaciente)
  
        } catch (error) {
          onError(error)
  
        }
  
        
        // setMessageToSend('');
      
    
  }
  const edit = async ({form,id})=>{


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
          }   );

       
        } catch (error) {
          onError(error)
  
        }
  
      
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

  
  React.useEffect(()=>{
  //   setTimeout(()=>{
  //     try {
  //       getPacientes() 
       
  //      } catch (error) {
  //         onError(error)
  //      }
  //  },3000)
   try {
    getPacientes() 
  
   } catch (error) {
      onError(error)
   }
    },[loading])

    
  
      return { 
        loading,
        error,
        pacientes,
        savePaciente,
        edit,
        cosita,
        onSincronize
     
       }
  
}


// Objeto compuesto para el useReducer
const initialState = ({initialValue})=>({
    error:false,
    loading:true,
    pacientes:initialValue,
})

const actionTypes={
  error:'ERROR',
  addPaciente:'ADDPACIENTE',
  loading: 'LOADING',
  sincronize:'SINCRONIZE'
}
const reducerObject = (state, payload)=>({
  [actionTypes.error]:{
    ...state,
    error:payload,
   },
  [actionTypes.addPaciente]:{
    ...state,
    pacientes: payload,
   },
  [actionTypes.loading]:{
    ...state,
    loading:false,
   },
  [actionTypes.sincronize]:{
    ...state,
    loading:true,
   }
})

const reducer =(state,action)=>(reducerObject(state, action.payload)[action.type] || state)
  

  
  export { useLocalStorage}




  


















