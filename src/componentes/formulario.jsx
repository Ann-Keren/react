function Formulario(){
    return(
        <div className="md:w-1/2 mx-5 lg:w-2/5">
        <h2 className="text-center font-black text-3xl">Seguimiento Pacientes</h2>
        <p className="text-center mt-5 text-lg mb-10"> Añade Pacientes <span className="text-indigo-600 font-bold mb-5">Administrarlos</span></p>
        <form className="bg-cyan-200 py-10 px-8 shadow-md  rounded-lg">
            <div>
                <label className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                 type="text"
                 placeholder="nombre de la Mascota"
                 />
                 
            </div>
            <div>
                <label className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                 type="text"
                 placeholder="Nombre Propietario"
                 />
                 
            </div>
            <div>
                <label className="block text-gray-700 uppercase font-bold">Email</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                 type="text"
                 placeholder="Email"
                 />
                 
            </div>
            <div>
                <label className="block text-gray-700 uppercase font-bold">Alta</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                 type="text"
                 placeholder="Alta"
                 />
                                  
            </div>
            <div>
                <label className="block text-gray-700 uppercase font-bold">Sintomas</label>
                <input className="p-2 rounded-md w-full mt-2 placeholder-gray-500 mb-3"
                 type="text"
                 placeholder="Sintomas"
                 />
                                  
            </div>
            
        </form>
      </div>
    )
}

export default Formulario