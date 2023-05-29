import React from "react";
// import './TodoForm1.css'
import { useNavigate} from 'react-router-dom'
const fechaJsToSql = (fecha) => {
    // console.log(fecha)
    const mes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    const horas = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    const minutosSegundos = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
    // console.log(fecha.getFullYear() + "-" + mes[fecha.getMonth()] + "-" + dias[fecha.getDate() - 1] + " " + horas[fecha.getHours()] + ":" + minutosSegundos[fecha.getMinutes()] + ":" + minutosSegundos[fecha.getSeconds()])
    return fecha.getUTCFullYear() + "-" + mes[fecha.getUTCMonth()] + "-" + dias[fecha.getUTCDate() - 1] + " " + horas[fecha.getUTCHours()] + ":" + minutosSegundos[fecha.getUTCMinutes()] + ":" + minutosSegundos[fecha.getUTCSeconds()];
}

function FormPaciente({addPaciente,pacientes}){
    const navigate = useNavigate() 
           
    const [form, setForm] = React.useState({
        nombre:'',
        apellidos:'',
        cedula:'',
        telefono:'',
        fechaNacimiento:'',
        sexo:'',
        email:'',
        direccion:'',
        medico:'',
        medicamentos:'',
        afiliacion:'',
        fechaConsulta:fechaJsToSql(new Date()),
        })
    // const [form, setForm] = React.useState({
    //     nombre:'',
    //     apellido:'',
    //     cedula:'',
    //     nacimiento:'',
    //     telefono:'',
    //     direccion:'',
    //     eps:'',
    //     sintomatologia:'',
    //     examenes:'',
    //     correo:'',
    //     registro:'',})


    const onChange=(event)=>{
        setForm({
            ...form,
            // Modificar un elemento en el objeto
            // Toma el nombre del imput y le agrega lo que el usuario este ingresando
            [event.target.name]: event.target.value
            
        })
    console.log(form);}
         

    const onCancel = ()=>{
        navigate('/pacientes')
        // setOpenModalP(false)
    }

    const getCurrentDate = ()=>{
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const currentDate = `${year}-0${month}-0${day}`
        return(currentDate)
    }
   
    const onSubmit = (event)=>{
        

        // No vamos a recargar la pagina o tratar de enviar nuestros datos a alguna parte
        // Validamos que no hayan campos requeridos vacios
        if (!form) {
            event.preventDefault()
            console.log('que hace');
            console.log(form);
        } else {
            // El form.id es de tipo strin....validar eso
            const pacienteExist = pacientes.filter(p => {
                
                return p.cedula == form.cedula
            })
            if (pacienteExist.length >= 1) {
                alert('Ya existe un paciente con la misma cedula')
                event.preventDefault()
                
                } else {
                    event.preventDefault()
                    // setForm()
                   
                    addPaciente(form)
                    // navigate('/pacientes')
                    
                  }   
         
       
        }
    }

    return(
        <div className="container"> 
          <form onSubmit={onSubmit}>
            <label>Nombre</label>
            <input className="input" 
                required
                value = {form.nombre}
                onChange={onChange}
                placeholder="Nombre"
                name="nombre"
            />
             <label>Apellidos</label>
            <input className="input" 
                required
                value = {form.apellidos}
                onChange={onChange}
                placeholder="Apellidos"
                name="apellidos"
            />
            <label>Cedula</label>
            <input className="input"
                required
                type="number"
                name="cedula"
                value = {form.cedula}
                onChange={onChange}
                placeholder="cedula"
            />
            <label>Fecha De Nacimiento</label>
            <input className="nacimiento"
                type="date"
                max={getCurrentDate()}
                name="fechaNacimiento"
                value = {form.fechaNacimiento} 
                onChange={onChange}
                placeholder="Fecha De Nacimiento"
            />
             <label>Sexo</label>
            <input className="input"
                name="sexo"
                 value = {form.sexo} 
                onChange={onChange}
                placeholder="Sexo"
            />
             <label>Telefono</label>
            <input className="input"
                type="number"
                name="telefono"
                value = {form.telefono}
                onChange={onChange}
                placeholder="Telefono"
            />
            
           
            <label>Email</label>
            <input className="input"
                
                name="correo"
                type='email'
                value = {form.correo}
                onChange={onChange}
                placeholder="Email"
            />
             <label>Direccion</label>
            <input className="input"
                name="direccion"
                value = {form.direccion}
                onChange={onChange}
                placeholder="Direccion"
            />
             <label>Medico</label>
            <input className="input"
                
                name="medico"
                value = {form.medico}
                onChange={onChange}
                placeholder="medico"
            />
             <label>Medicamentos</label>
            <input className="input"
                name="medicamentos"
                value = {form.medicamentos}
                onChange={onChange}
                placeholder="medicamentos"
            />
             <label>Afiliacion</label>
            <input className="input"
                name="afiliacion"
                value = {form.afiliacion}
                onChange={onChange}
                placeholder="afiliacion"
            />
          
            





            
             
            
           
            {/* <label>EPS</label>
            <input className="input"
                
                name="eps"
                value = {form.eps}
                onChange={onChange}
                placeholder="EPS"
            />
            <label>Sintomatologia</label>
            <input className="input"
                
                name="sintomatologia"
                value = {form.sintomatologia}
                onChange={onChange}
                placeholder="Sintomatologia"
            />
             <label>Examenes</label>
            <input className="input"
                
                name="examenes"
                value = {form.examenes}
                onChange={onChange}
                placeholder="Examenes"
            /> */}
            
            
            
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button TodoForm-button--cancel"
                onClick={onCancel}
                >
                Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                Añadir
                </button>
            </div>
        </form>  
        </div>
        
    )
}

export { FormPaciente}
