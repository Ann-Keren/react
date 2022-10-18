function ListadoP(){
    
    
    return(
        <div className="md:w-1/2 lg:w-3/5 overflow-y-scroll md:h-screen">
        <h2 className="font-black text-3xl text-center">Listado Paciente </h2>
        <p className="text-xl mb-10 mt-5 text-center">Administra tus <span className="text-indigo-600 font-bold">Pacientes/Citas</span>{" "} </p>


        <div className="mt-3 py-10 rounded-xl bg-cyan-200 shadow-md px-5">
            <p className="font-bold mb-3 text-gray-700 uppercase ">Nombre de la Mascota: <span className="font normal-case">Toby</span></p> 


            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre del Propietario: <span className="font normal-case">Ana Karen</span></p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: <span className="font normal-case">rock_purple@hotmail.com</span></p>
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Alta: <span className="font normal-case">22/10/2022  18:30:00 hrs</span></p>
            
            
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: <span className="font normal-case">Dolor estomago y duerme mucho</span></p>


        </div>        

        </div>
    )
}

export default ListadoP