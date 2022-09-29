import React from "react";
import './TodoForm.css'

function EditModal({
    pacienteToEdit,
    setOpenModalEdit,
    editPaciente,
    paciente
}){
    

    const id = pacienteToEdit._id
  
    const [form, setForm] = React.useState({...pacienteToEdit})

    const onChange=(event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
            
        })
    }
  

    const onCancel = ()=>{
        setOpenModalEdit(false)
    }
    const onSubmit = (event)=>{
        // No vamos a recargar la pagina o tratar de enviar nuestros datos a alguna parte
        if (!form) {
            event.preventDefault()
        } else {
            const pacienteExist = paciente.filter(p => p.identificacion === form.identificacion);
            if (pacienteExist.legth>=1) {
                alert('Ya existe un paciente con la misma identificacion')
                event.preventDefault()
            } else {
               
                event.preventDefault()
                console.log('id del paciente to edit');
                console.log(id);
                console.log(typeof(id));
                editPaciente({form,id})
                setOpenModalEdit(false) 
            }
            
        }
       
    }

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
                name="nacimiento"
                /* value = {form.nacimiento} */
                onChange={onChange}
                placeholder="Fecha De Nacimiento"
            />
             <label>Identificacion</label>
            <input className="input"
                required
                disabled
                type="number" step='0'
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
                Actualizar
                </button>
            </div>
        </form>
    )
}

export { EditModal}