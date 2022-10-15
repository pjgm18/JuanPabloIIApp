import React from "react";
import './Table.css'


function Table({children,loading}){
    console.log('loading Table');
    console.log(loading);
    return(
     <div className={`main-table-container ${!!loading &&"main-table-container--loading"}`}>
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