

import Header from "./componentes/header"
import ListadoP from "./componentes/listadoPaciente"
import Paciente from "./componentes/paciente"
import Error from "./componentes/error"
import Formulario from "./componentes/formulario"


function App() {
  

  return(
    <>
      <Header/>
      <ListadoP/>
      <Paciente/>
      <Error/>
      <Formulario/>

    </>
  )
}

export default App
