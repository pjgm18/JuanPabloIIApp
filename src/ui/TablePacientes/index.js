import React from "react";
import './Table.css'


function TablePacientes({children,cargando}){
    // cargando = false
    !!cargando && console.log('cargando es ' + cargando);
    return(
     <div className={`main-table-container ${!!cargando &&"main-table-container--loading"}`}>
        <h1>{cargando}</h1>
        <table>
            <tbody>
            <tr>
                <td className="td-top">Nombre</td>
                <td className="td-top">Identificacion</td>
            </tr>
             {children}  
            </tbody>
        </table>
     </div>
     )
    
}

export { TablePacientes }