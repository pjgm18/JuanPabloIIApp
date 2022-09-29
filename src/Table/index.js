import React from "react";
import './Table.css'


function Table({children}){
    return(
     <div className="main-table-container">
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

export { Table }