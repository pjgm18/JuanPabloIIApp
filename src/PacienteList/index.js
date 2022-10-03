import React from "react";
import './PacienteList.css'

/* Como TodoList es una lista de TODOs creados por los usuarios y,  en HTML para crear listas se utiliza la etiqueta <ul>, entonces este <ul> se convierte en un componente que va a contener tantos componentes <li> como TODOs haya n el arreglo*/

/* Entonces como esta lista necesitamos pasarle el contenido de el arreglo de TODOs en el llamado del componente     

    <TodoList>             
                                 __
        {todos.map(todo =>(        |
          <TodoItem/>              |  Este es el argumento de children  
        ))}                      __|
                                 
    </TodoList>,                  

se dejan las etiquetas abiertas para pasarle los componentes <TodoItem>.
Para hacer esto se utiliza la propiedad especial children que encierra todo el contenido de  lo que esta dentro de las etiquetas del componente al momento de hacerle el llamado y lo encapsula en children. Este children hace parte del parametro (props) entonces cuando se define el componente o funcion se puede definir donde se va renderizar children por medio de {props.children}

*/


function PacienteList(props){
    const renderFunc = props.children || props.render
    console.log('render list');

    
    return(
       
    <section className="PacienteList-container">


            

            {props.pacienteSeleccionado.map(renderFunc)}
    </section>
)
}

export {PacienteList}
