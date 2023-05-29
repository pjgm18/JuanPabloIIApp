import React from "react";
import { Link } from 'react-router-dom';
import './menu.css'

function Menu() {
  
    return (
  
   
   
        <div className="menu">
            <ul>
            <li> <Link to={`/pacientes`}>Pacientes</Link></li>
            <li><Link to={`/examenes`}>Examenes</Link></li>
          </ul>
        </div>
 
          
   
      );
}
export { Menu}