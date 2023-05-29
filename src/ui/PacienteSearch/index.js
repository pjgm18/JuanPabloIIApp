import React from "react";
import './TodoSearch.css'


// Con estos parametros vamos a poder seguir recibiendo el estado y como modificarlo apensar de que no tenemos el estado local si no en algun componente padre
function PacienteSearch(
    {
        
        setSearchValueId,
        searchValueName,
        searchValueId,
        findByName,
 }) {
    let timeoutId;

    function onSearchValueImputName(event) {
        const inputValue = event.target.value;
        clearTimeout(timeoutId); // Limpiar el timeout anterior
        timeoutId = setTimeout(() => {
            findByName(inputValue);
            setSearchValueId(inputValue)
        }, 500); // Ejecutar la función de búsqueda después de 500 milisegundos
    }

    const onSearchValueImputId = (event) => {
        console.log(event.target.value)
        setSearchValueId(event.target.value)
    }
    return (
        <div className="inputContainer">
            <input
                className="inputSearch"
                placeholder="Buscar por nombre"
                // La propiedad value es el valor inicial del input
                value={searchValueName}
                //Vamos a escuchar cada vez que cambie el texto de nuestro imput y ademas nos va a devolver el evento que hicieron los usuarios. Esta informacion la recibimos en los parametros de la funcion onSearchValueImput que queremos ejecutar cada vez que suceda el evento onChange. En esta informacion encontramos una propiedad target que contiene un valor value.
                onChange={onSearchValueImputName}
            />
            {/* <input
                type='number'
                className="inputSearch"
                placeholder="Identificacion"
                // La propiedad value es el valor inicial del input
                value={searchValueId}
                //Vamos a escuchar cada vez que cambie el texto de nuestro imput y ademas nos va a devolver el evento que hicieron los usuarios. Esta informacion la recibimos en los parametros de la funcion onSearchValueImput que queremos ejecutar cada vez que suceda el evento onChange. En esta informacion encontramos una propiedad target que contiene un valor value.
                onChange={onSearchValueImputId}
            /> */}
        </div>

    )

}

export { PacienteSearch }