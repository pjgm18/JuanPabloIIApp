import React from "react";

import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { PacienteSearch } from "../../ui/PacienteSearch"
import { TablePacientes } from "../../ui/TablePacientes";
import { FilasTablaPacientes } from "../../ui/FilasTablaPacientes";
import { useNavigate, Outlet } from 'react-router-dom'
import { usePacientes } from "../usePacientes";
import { TodosLoading } from "../../ui/TodosLoading";

function PacientesPage() {
  const navigate = useNavigate()

  const {
    cargando,
    loading,
    setSearchValueId,
    searchedPaciente,
    showDetails,
    findByName,
    setpacienteSelected,
    pacienteSelected,
    prueba,
    setPatito,
    patito,
    cargando2

  } = usePacientes()
console.log('cargando2');
console.log(cargando2);
  if (loading) {
    
    return <TodosLoading></TodosLoading>
  }
  return (
    <React.Fragment>
      <>
      
        <h2 style={{ textAlign: 'center',marginTop: '50px' }}>Pacientes Page</h2>

        <>
          <PacienteSearch
            findByName={findByName}
            setSearchValueId={setSearchValueId}
          />
          <TablePacientes
            cargando={cargando}
          >
            {searchedPaciente.map(p => (
              <FilasTablaPacientes
                cargando={cargando}
                key={p.id}
                nombre={p.nombre}
                id={p.cedula}
                
                

                // onShowDetails={setShowPacienteDetails}
                onShowDetails={() => {
                  setPatito(new Date())
                  navigate(`/pacienteDetails/${p.id}`,
                  {
                    state: {p}
                  }
                  )
                }}
              />
            ))
            }
          </TablePacientes>
          <Outlet />
        </>
      </>

      <CreateTodoButton
        onClick={() => navigate('/new')}

      //    loading={loading}
      // setOpenModalP = {setOpenModalP}
      // setShowPaciente = {setShowPaciente}
      // showPaciente = {showPaciente}
      /* setOpenModalS = {setOpenModalS} */
      />
    </React.Fragment>


  )
}

export { PacientesPage };
