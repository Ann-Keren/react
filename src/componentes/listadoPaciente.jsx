import { useEffect } from "react"
import Paciente from "./paciente"

function ListadoP({ pacientes, setPaciente, eliminarPaciente }) {
    //console.log(pacientes)  
  /*  useEffect(()=>{
        if(pacientes.length>=1)
        console.log('Nuevo Paciente')
    },[pacientes])*/

    return (
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
            {pacientes.length === 0 ? (
                <div>
                    <h2 className="font-black text-3xl text-center" >No hay Pacientes</h2>
                    <p className="text-xl text-center mt-5">Comienza Agregar Pacientes <span className="text-indigo-600 font-bold">y Apareceran en este lugar</span></p>
                </div>
            ) : (
                <div>
                    <h2 className="font-black text-3xl text-center">Listado Paciente </h2>
                    <p className="text-xl mb-10 mt-5 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes/Citas</span>{" "} </p>

                    {pacientes.map(paciente => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            eliminarPaciente={eliminarPaciente}
                            setPaciente={setPaciente}
                        />
                    ))}
                </div>
            )}

        </div>
    )
}

export default ListadoP