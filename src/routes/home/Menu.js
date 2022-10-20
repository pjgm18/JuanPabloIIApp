import React from "react";
import { Link } from 'react-router-dom';


function Menu() {
  
    return (
  
   
   
          <ul>
            <li> <Link to={`/pacientes`}>Pacientes</Link></li>
            <li><Link to={`/examenes`}>Examenes</Link></li>
          </ul>
 
          
   
      );
}
export { Menu}