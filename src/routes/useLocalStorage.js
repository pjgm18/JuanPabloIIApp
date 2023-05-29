
import React from "react";
const API = 'http://localhost:3000/api/v1/'

//Custom HOOK para persistencia de datos
function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve("Tiempo completado"), time);
  });
}

function useLocalStorage(itemName, initialValue) {
  const [cargando, setCargando] = React.useState(false)
  const [cargando2, setCargando2] = React.useState(false)
  const [prueba, setPrueba] = React.useState(false)
  const [pacienteSelected, setpacienteSelected] = React.useState([])
  console.log('storage');
  console.log(cargando2);

  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))

  const {
    error,
    loading,
    pacientes,
  } = state

  //  ACTION CREATORS
  const onError = (error) => { dispatch({ type: actionTypes.error, payload: error }) }

  const onUpdate = (newPaciente) => {
    dispatch({ type: actionTypes.addPaciente, payload: newPaciente })
  }

  const onLoading = () => { dispatch({ type: actionTypes.loading }) }

  const onSincronize = () => {
    console.log('Sincronizando');
    dispatch({
      type: actionTypes.sincronize
    })
  }

  const getPacientes = async () => {

    const data = await (await fetch(`${API}pacientes`)).json();
    const pacientes = data
    onUpdate(pacientes)
    onLoading()
  }
  const findPacienteByName = async (name) => {
    if (name.length) {
      console.log('*****************************');
      console.log(name.length);
      console.log(`${API}pacientes/${name}`);
      const data = await (await fetch(`${API}pacientes/${name}`)).json();
      const pacientes = data
      console.log(pacientes);
      onUpdate(pacientes)
      
    }else{

      getPacientes()
    }
    setCargando(false)




  }
  const findPacienteById = async (id) => {
      const data = await (await fetch(`${API}pacientes/id/${id}`)).json();
      const pacientes = data
      setpacienteSelected(pacientes)
      setCargando2(false)
      return pacientes


return pacientes


  }
  const savePaciente = async (form) => {
    await delay(3000)
    const paciente = {
        nombre:form.nombre,
        apellidos:form.apellidos,
        cedula:form.cedula,
        telefono:form.telefono,
        fechaNacimiento:form.fechaNacimiento,
        sexo:form.sexo,
        email:form.email,
        direccion:form.direccion,
        medico:form.medico,
        medicamentos:form.medicamentos,
        afiliacion:form.afiliacion,
        fechaConsulta:form.fechaConsulta   
      };
    try {
      await fetch(`${API}pacientes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(paciente),
      });
      setCargando2(false)
      setPrueba(true)
      // const newPaciente = [...pacientes]
      // newPaciente.push(paciente)
      // onUpdate(newPaciente)

    } catch (error) {
      onError(error)

    }


    // setMessageToSend('');


  }
  const edit = async ({ form, id }) => {
    const paciente = {
      id : form.id,
      nombre : form.nombre,
      apellidos : form.apellidos,
      cedula : form.cedula,
      telefono : form.telefono,
      fechaNacimiento : form.fechaNacimiento,
      sexo : form.sexo,
      edad : form.edad,
      email : form.email,
      direccion : form.direccion,
      medico : form.medico,
      medicamentos : form.medicamentos,
      afiliacion : form.afiliacion,
      fechaConsulta : form.fechaConsulta,
      fechaRegistro : form.fechaRegistro

    };

    try {
      await fetch(`${API}pacientes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(paciente),
      });
      setCargando2(false)
      console.log('false');

    } catch (error) {
      onError(error)

    }


  }
  const cosita = async (id) => {
    console.log('cosita');
    console.log(id);
    console.log('delete');
    await fetch(`${API}pacientes/${id}`, {
      method: 'DELETE',
    });
    setCargando2(false)
    setPrueba(true)
   
    // const pacienteIndex = pacientes.findIndex(p => p.identificacion === id);
    // const newPaciente = [...pacientes]
    // newPaciente.splice(pacienteIndex, 1)
    // savePaciente(newPaciente)
  }


  React.useEffect(() => {
    console.log('usefect');
    try {
      getPacientes()

      // findPacienteByName('pedro')

    } catch (error) {
      onError(error)
    }
  }, [])



  return {
    cargando,
    cargando2,
    setCargando,
    setCargando2,
    loading,
    error,
    pacientes,
    savePaciente,
    edit,
    cosita,
    onSincronize,
    findPacienteByName,
    findPacienteById,
    pacienteSelected,
    prueba
    

  }

}


// Objeto compuesto para el useReducer
const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  pacientes: initialValue,
})

const actionTypes = {
  error: 'ERROR',
  addPaciente: 'ADDPACIENTE',
  loading: 'LOADING',
  sincronize: 'SINCRONIZE'
}
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: payload,
  },
  [actionTypes.addPaciente]: {
    ...state,
    pacientes: payload,
  },
  [actionTypes.loading]: {
    ...state,
    loading: false,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
  }
})

const reducer = (state, action) => (reducerObject(state, action.payload)[action.type] || state)



export { useLocalStorage }






















