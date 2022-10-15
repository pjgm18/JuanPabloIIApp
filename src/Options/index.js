import React from "react";
import './Options.css'

function Options({children,loading}){
    if(loading){
        return <p>Cargando......</p>
    }
    return(
        <div className="options">
            
            {children}  
        </div>
    )
}
export {Options}
