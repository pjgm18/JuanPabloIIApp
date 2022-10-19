import React from "react";
import './TodoForm.css'
import { useNavigate} from 'react-router-dom'

function FormPaciente({setOpenModalP,addPaciente,pacientes,setLoading}){
    const navigate = useNavigate()
    
    const [form, setForm] = React.useState({
        nombre:'',
        apellido:'',
        nacimiento:'',
        identificacion:'',
        telefono:'',
        direccion:'',
        eps:'',
        sintomatologia:'',
        examenes:'',
        correo:'',
        registro:'',})


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
                
                return p.identificacion == form.identificacion
            })
            console.log(pacienteExist);
            if (pacienteExist.length >= 1) {
                alert('Ya existe un paciente con la misma identificacion')
                event.preventDefault()
                
                } else {
                    event.preventDefault()
                    setForm()
                    addPaciente(form)
                    setOpenModalP(false)
                    
                  }   
         
       
    }}

    return(
        <form onSubmit={onSubmit}>
            <label>Nombre</label>
            <input className="input" 
                required
                value = {form.nombre}
                onChange={onChange}
                placeholder="Nombre"
                name="nombre"
            />
             <label>Apellido</label>
            <input className="input" 
                required
                value = {form.apellido}
                onChange={onChange}
                placeholder="Apellido"
                name="apellido"
            />
            
            <label>Fecha De Nacimiento</label>
            <input className="nacimiento"
                
                type="date"
                max={getCurrentDate()}
                name="nacimiento"
                /* value = {form.nacimiento} */
                onChange={onChange}
                placeholder="Fecha De Nacimiento"
            />
             <label>Identificacion</label>
            <input className="input"
                required
                type="number"
                name="identificacion"
                value = {form.identificacion}
                onChange={onChange}
                placeholder="Identificacion"
            />
             <label>Telefono</label>
            <input className="input"
                
                type="number"
                name="telefono"
                value = {form.telefono}
                onChange={onChange}
                placeholder="Telefono"
            />
            <label>Direccion</label>
            <input className="input"
                
                name="direccion"
                value = {form.direccion}
                onChange={onChange}
                placeholder="Direccion"
            />
            <label>EPS</label>
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
            />
            
            <label>Email</label>
            <input className="input"
                
                name="correo"
                type='email'
                value = {form.correo}
                onChange={onChange}
                placeholder="Email"
            />
            
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
    )
}

export { FormPaciente}
