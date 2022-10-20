import React from "react";
import {HashRouter,Routes,Route} from 'react-router-dom'
import { HomePage } from "./home/HomePage";
import { NewPacientePage } from "./new/NewPacientePage";
import { EditPacientePage } from "./edit/EditPacientePage";
import { PacientesPage} from  "./pacientes/PacientesPage"
import { PacienteDetails } from "./pacientes/PacienteDetails";
import { Menu } from "./home/Menu";
import { TodoHeader } from "../ui/TodoHeader";
import { Titulo } from "../ui/Title";
import { ExamenesPage } from "./examenes/ExamenesPage";


// Componente principal que renderiza la aplicacion
function App() {
  return(
    <HashRouter>
      <TodoHeader>
        <Titulo/>
        <Menu/>
      </TodoHeader>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/pacientes" element={<PacientesPage/>}/>
        <Route path="/examenes" element={<ExamenesPage/>}/>
        <Route path="/pacientes/:slug" element={<PacienteDetails/>} />
        {/* <Route path="/pacientes" element={<PacientesPage/>}/>
        <Route path="/pacientes/:id" element={<PacienteDetails/>} /> */}
        <Route path="/new" element={<NewPacientePage/>}/>
        <Route path="/edit/:id" element={<EditPacientePage/>}/>
        <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
    </HashRouter>
  )

}

export default App;

          // <Route path="/blog" element={<BlogPage />} >
          //   <Route path=":slug" element={<BlogPost />} />
          // </Route>
