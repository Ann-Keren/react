

import Header from "./componentes/header"
import ListadoP from "./componentes/listadoPaciente"

import Formulario from "./componentes/formulario"
import Error from "./componentes/error"
import Paciente from "./componentes/paciente"



function App() {
    return(
    <div className="mt-20">
      <Header/>
      
      <Formulario/>
      <ListadoP/>
      <Error/>
      <Paciente/>

    </div>
  )
}

export default App;
