import React from "react";
import {HashRouter,Routes,Route} from 'react-router-dom'
import { HomePage } from "./Home/HomePage";
import { NewPacientePage } from "./NewPacientePage/NewPacientePage";
import { EditPacientePage } from "./EditPage/EditPacientePage";
import { PacientesPage} from  "./PacientesPage/PacientesPage"
import { PacienteDetails } from "./PacientesPage/PacienteDetails";
import { Menu } from "./Home/Menu";
import { TodoHeader } from "../ui/TodoHeader";
import { Titulo } from "../ui/Title";
import { ExamenesPage } from "./ExamenesPage/ExamenesPage";


// Componente principal que renderiza la aplicacion
function App() {
  return(
    <HashRouter>
      <TodoHeader>
        <Titulo/>
        {/* <Menu/> */}
      </TodoHeader>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pacientes" element={<PacientesPage/>}/>
        <Route path="/examenes" element={<ExamenesPage/>}/>
        <Route path="/pacienteDetails/:id" element={<PacienteDetails/>} />
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
