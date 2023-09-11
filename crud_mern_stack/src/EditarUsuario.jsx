import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function EditarUsuario() {

    // baseURL = "";

    /* const = [edit, setEdit] = React.useState(null);
    */
    const [nombre, setNombre] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefono, setTelefono] = React.useState('');

    const params = useParams();

    React.useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario})
            .then(res => {
                console.log(res.data[0])
                
                const datausuario = res.data[0];
                setNombre(datausuario.nombre);
            })
    }, []);
 
    function actualizarUsuario() {

    }

    return(
        <div className='container-fluid'>
            <h2>Editar usuario</h2>
            <h3>El ID del usuario es: {params.idusuario}</h3>

            <div className="row">

                <div className="col-sm-6 offset-3">
                    <div className="mb-3">

                        <label htmlFor="nombre" className='form-label'>Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value) }} />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value) }} />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="telefono" className='form-label'>Teléfono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value) }} />

                    </div>

                    <button onClick={actualizarUsuario} className="btn btn-success mb-3">Actualizar Usuario</button>
                </div>

            </div>
            
        </div>
    );
}

export default EditarUsuario