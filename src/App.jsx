

import Header from "./componentes/header"
import ListadoP from "./componentes/listadoPaciente"

import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
import Paciente from "./componentes/paciente"



function App() {
  

  return(
    <>
      <Header/>
      <ListadoP/>
      <Formulario/>
      <Error/>
      <Paciente/>

    </>
  )
}

export default App
