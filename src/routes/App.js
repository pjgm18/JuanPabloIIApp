import React from "react";
import {HashRouter,Routes,Route} from 'react-router-dom'
import { HomePage } from "./home/HomePage";
import { NewPacientePage } from "./new/NewPacientePage";
import { EditPacientePage } from "./edit/EditPacientePage";
import { PacientesPage} from  "./pacientes/PacientesPage"


// Componente principal que renderiza la aplicacion
function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pacientes" element={<PacientesPage/>}/>
        <Route path="/new" element={<NewPacientePage/>}/>
        <Route path="/edit/:id" element={<EditPacientePage/>}/>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
  )

}

export default App;
