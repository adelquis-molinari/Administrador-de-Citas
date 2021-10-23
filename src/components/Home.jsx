import React, {useState, useEffect} from 'react'
import Formulario from './Formulario'
// import Citas from './Citas'
import Cita from './Cita'

const Home = () => {
    //Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  // Arreglo de Citas
  const [citas, setCitas] = useState(citasIniciales);
  // useEfect para localStorage

  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales]);

  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ])
  }
  
    //Función que elimina cita por id
    const eliminarCita = id =>{
      const nuevasCitas = citas.filter(c => c.id !== id);
      setCitas(nuevasCitas)
  }
  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
    return ( 
      <React.Fragment>
        <h1>Adiministrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario 
                crearCita ={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {
                citas.map(cita =>(
                  <Cita
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}
 
export default Home;