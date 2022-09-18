
import React from "react";

//Custom HOOK para persistencia de datos
function useLocalStorage(itemName, initialValue){

  const[error, setError] = React.useState(false)
  const[loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)
  // e
  React.useEffect(()=>{
    setTimeout(() => {
     try {
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
  },[])

   
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
        error
       }
  
  }
  
  export { useLocalStorage}




  


















