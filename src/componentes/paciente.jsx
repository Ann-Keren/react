import {useEffect} from 'react'

function Paciente({ paciente, eliminarPaciente, setPaciente }) {
    //console.log(paciente)
    const { mascota, propietario, email, alta, sintomas, id } = paciente
    const eliminarFormulario = () => {
        const respuesta = confirm('¿Deseas Eliminar el paciente?')
        if (respuesta) {
            eliminarPaciente(id)
        }
    }
  /* useEffect(()=>{
        console.log('el componente esta listo')
    },[])*/

    return (
        <div className="bg-cyan-200 shadow-md px-5 mx-5 rounded-md">
            <p className="font-bold text-gray-700 uppercase">Nombre-Mascota: <span className="font-normal normal-case">{mascota}</span></p>

            <p className="font-bold text-gray-700 uppercase">Propietario: <span className="font-normal normal-case">{propietario} </span></p>

            <p className="font-bold text-gray-700 uppercase">Email: <span className="font-normal normal-case">{email} </span></p>

            <p className="font-bold text-gray-700 uppercase">Alta: <span className="font-normal normal-case">{alta} </span></p>

            <p className="font-bold text-gray-700 uppercase">Sintomas: <span className="font-normal normal-case">{sintomas} </span></p>

            <div className="flex justify-between mt-10"><button type="button" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 uppercase rounded-lg "
                onClick={() => setPaciente(paciente)}>Editar</button>

                <button type="button" className="bg-red-600 hover:bg-red-700 text-white px-10 uppercase rounded-lg"
                    onClick={eliminarFormulario}>Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente