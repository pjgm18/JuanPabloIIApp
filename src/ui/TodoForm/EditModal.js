import React from "react";
import './TodoForm1.css'
import { usePacientes } from '../../routes/usePacientes'
import { useNavigate, useParams } from 'react-router-dom'



function EditModal({
    pacienteToEdit,
    cargando2,
    onSubmit: onSubmitt,
}) {
    const navigate = useNavigate()
    console.log(pacienteToEdit[0]);
let fechaFormateada
    try {
        const fechaString = pacienteToEdit[0].fechaNacimiento
        console.log(fechaString);
        const fecha = new Date(fechaString);
         fechaFormateada = fecha.toISOString().split("T")[0];
        pacienteToEdit[0].fechaNacimiento = fechaFormateada
        console.log(fechaFormateada);
    } catch (error) {
        fechaFormateada= pacienteToEdit[0].fechaNacimiento
    }





    const [form, setForm] = React.useState(pacienteToEdit[0])

    const onChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value


        })
        console.log(form);
    }


    const onCancel = () => {
        navigate(-1)
    }
    const onSubmit = (event) => {
        // No vamos a recargar la pagina o tratar de enviar nuestros datos a alguna parte
        if (!form) {
            event.preventDefault()
            // } else {
            //     const pacienteExist = pacientes.filter(p => p.identificacion === form.identificacion);
            //     if (pacienteExist.legth >= 1) {
            //         alert('Ya existe un paciente con la misma identificacion')
            //         event.preventDefault()
        }
        else {

            event.preventDefault()
            // setLoading(true)
            onSubmitt(form)
            navigate('/pacienteDetails/' + form.id,
                {
                    state: ''
                })


            // }

        }

    }

    //   return null


    return (
        <form onSubmit={onSubmit}>
            <label>Nombre</label>
            <input className="input"
                required
                value={form.nombre}
                onChange={onChange}
                placeholder="Nombre"
                name="nombre"
            />
            <label>Apellido</label>
            <input className="input"
                required
                value={form.apellidos}
                onChange={onChange}
                placeholder="Apellido"
                name="apellidos"
            />
            <label>Identificacion</label>
            <input className="input"
                required
                disabled
                type="number" step='0'
                name="cedula"
                value={form.cedula}
                onChange={onChange}
                placeholder="Identificacion"
            />
            <label>Telefono</label>
            <input className="input"

                type="number"
                name="telefono"
                value={form.telefono}
                onChange={onChange}
                placeholder="Telefono"
            />
            <label>Fecha De Nacimiento</label>
            <input className="nacimiento"
                type="date"
                name="fechaNacimiento"
                value={form.fechaNacimiento}
                onChange={onChange}
                placeholder="Fecha De Nacimiento"
            />
            <label>Sexo</label>
            <input className="input"

                name="Sexo"
                value={form.sexo}
                onChange={onChange}
                placeholder="sexo"
            />
            <label>Email</label>
            <input className="input"

                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="email"
            />

            <label>Direccion</label>
            <input className="input"

                name="direccion"
                value={form.direccion}
                onChange={onChange}
                placeholder="Direccion"
            />
            <label>Medico</label>
            <input className="input"

                name="medico"
                value={form.medico}
                onChange={onChange}
                placeholder="medico"
            />
            <label>Medicamentos</label>
            <input className="input"

                name="medicamentos"
                value={form.medicamentos}
                onChange={onChange}
                placeholder="medicamentos"
            />
            <label>afiliacion</label>
            <input className="input"

                name="Afiliacion"
                value={form.afiliacion}
                onChange={onChange}
                placeholder="afiliacion"
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

export { EditModal }


