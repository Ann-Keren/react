import { useState, useEffect } from "react";
import Error from "./error";

function Formulario({pacientes,setPacientes,paciente, setPaciente}) {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError]= useState(false)
    const generarId=()=>{
        const random=Math.random().toString(36)
        const fecha=Date.now().toString(36)
        return random+fecha

    }
    const validarFormulario=(e)=>{
        e.preventDefault()
            if([mascota,propietario,email,alta,sintomas].includes('')){
                console.log('hay al menos un campo vacio')
                setError(true)
                //cortar la funcion es lo q sirve el return
                return
            }
        setError(false)
        const objetoPaciente={mascota,propietario,email,sintomas,alta}
        if(paciente.id){

        }else{
            objetoPaciente.id=generarId()
            
            setPacientes([...pacientes, objetoPaciente])
        }
       // console.log(objetoPaciente)
        


        //para reiniciar formulario
        setMascota('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }


    return (

        <div className="md:w-1/2 mx-5 lg:w-2/5">
            <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>
            <p className="text-center mt-5 text-lg mb-10"> Añade Pacientes <span className="text-indigo-600 font-bold mb-5">Administrarlos</span></p>

            <form className="bg-cyan-200 py-10 px-8 shadow-md  rounded-lg" onSubmit={validarFormulario}>
                <div>
                    {
                        //
                    error&&<Error>                        <p>Todos los campos son obligatorios</p>
                    </Error>
                    }
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                            type="text"
                            placeholder="nombre de la Mascota"
                            value={mascota}
                            onChange={(e)=>setMascota(e.target.value)
                            }
                        />

                    </div>
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                            type="text"
                            placeholder="Nombre Propietario"
                            value={propietario}
                            onChange={(e)=>setPropietario(e.target.value)
                            } 
                        />

                    </div>
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Email</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)
                            }
                        />

                    </div>
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Alta</label>
                        <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                            type="date"
                            placeholder="Alta"
                            value={alta}
                            onChange={(e)=>setAlta(e.target.value)
                            }
                        />

                    </div>
                    <div>
                        <label className="block text-gray-700 uppercase font-bold">Sintomas</label>
                        <textarea className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                            type="text"
                            placeholder="Sintomas"
                            value={sintomas}
                            onChange={(e)=>setSintomas(e.target.value)
                            }
                        />

                    </div>
                    <input type="submit" className="bg-indigo-700 text-white uppercase w-full p-3 mt-5 rounded-md hover:bg-indigo-400 font-bold cursor-pointer transition-colors" value={'Agregar Paciente'} />
                </div>
            </form>
        </div>
    )
}

export default Formulario