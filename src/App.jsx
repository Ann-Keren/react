

import Header from "./componentes/header"
import ListadoP from "./componentes/listadoPaciente"
import Formulario from "./componentes/formulario"
import { useState, useEffect } from "react"



function App() {
  //areglo dinamico
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  const eliminarPaciente = id => {
    const pacientesActu = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActu)
  }


  useEffect(() => {
    const obtenerLS = (() => {
      const pacientesLS = JSON.parse(localStorage.getItem('paciente')) ?? []
      setPacientes(pacientesLS)
    })
    obtenerLS()
  }, [])
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])



  return (
    <div className="mt-20 container mx-auto">
      <Header />
      <div className="md:flex mt-12">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoP
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App;
