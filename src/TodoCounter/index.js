import React from "react";
import './TodoCounter.css'


// Componente TodoCounter que sera llamado en el componente principal App
function TodoCounter({totalTodos, completdTodos}) {

    return (
        
        <h2 className="TodoCounter">Has completado {completdTodos} de {totalTodos} TODOs</h2>
    )
} 

export { TodoCounter }