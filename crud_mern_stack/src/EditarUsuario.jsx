import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditarUsuario() {

    // baseURL = "";

    /* const = [edit, setEdit] = React.useState(null);
    */

    const params = useParams();

    const [nombre, setNombre] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefono, setTelefono] = React.useState('');

    React.useEffect(() => {
        axios.post('/api/usuario/obtener-datausuario', {idusuario: params.idusuario})
            .then(res => {
                console.log(res.data[0])
                
                const datausuario = res.data[0];
                setNombre(datausuario.nombre);
                setEmail(datausuario.email);
                setTelefono(datausuario.telefono);
            })
    }, [params.idusuario]);

    // return to index
    const navegar = useNavigate();

    // update function
    function editarUsuario() {
        // new obj
        const actualizarusuario = {
            nombre: nombre,
            email: email ,
            telefono: telefono,
            idusuario: params.idusuario
        }

        // request with axios
        axios.post('api/usuario/actualizar-usuario', actualizarusuario)
            .then(res => {
                console.log(res.data);
                alert(res.data);
                navegar('');
            })
            .catch(err => {
                console.log(err);
            })
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

                    <button onClick={editarUsuario} className="btn btn-success mb-3">Editar Usuario</button>
                </div>

            </div>
            
        </div>
    );
}

export default EditarUsuario