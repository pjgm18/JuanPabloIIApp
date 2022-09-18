import React from "react";
import './TodoSearch.css'


// Con estos parametros vamos a poder seguir recibiendo el estado y como modificarlo apensar de que no tenemos el estado local si no en algun componente padre
function TodoSearch({searchValue, setSearchValue}){
    // Los estados contienen un getter, un setter y un estado inicial

    //searchValue es nuestro estado y tiene como valor inicial un String vacio, pero podemos usar el set para modificar este valor como lo hacemos en el evento onChange al llamar a la funcion onSearchValueImput que llama al la funcion setSearchValue para modificar el estado searchValue. 

    /* const [searchValue, setSearchValue] = React.useState('') */


    const onSearchValueImput = (event)=>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    return( 

        <input 
        className="TodoSearch"
        placeholder="cebolla"
        // La propiedad value es el valor inicial del input
        value={searchValue}
        //Vamos a escuchar cada vez que cambie el texto de nuestro imput y ademas nos va a devolver el evento que hicieron los usuarios. Esta informacion la recibimos en los parametros de la funcion onSearchValueImput que queremos ejecutar cada vez que suceda el evento onChange. En esta informacion encontramos una propiedad target que contiene un valor value.
        onChange= {onSearchValueImput}
         
         />
    )

}

export { TodoSearch}