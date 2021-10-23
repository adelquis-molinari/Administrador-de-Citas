import React, { useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const Formulario = ({crearCita}) => {

    const [cita, setCita]= useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });
    const [error, setError] = useState(false);

    // Se ejecuta cada ves que se escribe en un input
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
            })
    }
    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas}= cita;
    // Al emviar formulario de cita
    const handleSudmit = e => {
        e.preventDefault();
        // validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        };
        setError(false);
        // asignar ID
        cita.id = uuidv4();
        // crear cita
        crearCita(cita)
        // reiniciar form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }
    return ( 
        <div>
            <h2>Crear Cita</h2>
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
            <form 
                    onSubmit={handleSudmit}
                    action="">
                <label>Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className="u-full-width"
                    placeholder="Nomre de Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text" 
                    name="propietario" 
                    className="u-full-width"
                    placeholder="Nomre ded dueño de la Mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <input
                    type="date" 
                    name="fecha" 
                    className="u-full-width"
                    onChange={handleChange}
                />
                <input 
                    type="time" 
                    name="hora" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas" 
                    cols="30" 
                    rows="10"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </div>
     );
}
 
export default Formulario;