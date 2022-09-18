import React from "react";
import './TodoSearch.css'


// Con estos parametros vamos a poder seguir recibiendo el estado y como modificarlo apensar de que no tenemos el estado local si no en algun componente padre
function PacienteSearch({setSearchValueName,setSearchValueId,searchValueName,searchValueId}){
    

    const onSearchValueImputName = (event)=>{
       
        setSearchValueName(event.target.value)
    }
    const onSearchValueImputId = (event)=>{
        console.log(event.target.value)
        setSearchValueId(event.target.value)
    }
    return( 
        <div className="inputContainer">
            <input 
            className="inputSearch"
            placeholder="Nombre"
            // La propiedad value es el valor inicial del input
            value={searchValueName}
            //Vamos a escuchar cada vez que cambie el texto de nuestro imput y ademas nos va a devolver el evento que hicieron los usuarios. Esta informacion la recibimos en los parametros de la funcion onSearchValueImput que queremos ejecutar cada vez que suceda el evento onChange. En esta informacion encontramos una propiedad target que contiene un valor value.
            onChange= {onSearchValueImputName}
            />
            <input 
            type='number'
            className="inputSearch"
            placeholder="Identificacion"
            // La propiedad value es el valor inicial del input
            value={searchValueId}
            //Vamos a escuchar cada vez que cambie el texto de nuestro imput y ademas nos va a devolver el evento que hicieron los usuarios. Esta informacion la recibimos en los parametros de la funcion onSearchValueImput que queremos ejecutar cada vez que suceda el evento onChange. En esta informacion encontramos una propiedad target que contiene un valor value.
            onChange= {onSearchValueImputId}
            />
        </div>
        
    )

}

export { PacienteSearch}