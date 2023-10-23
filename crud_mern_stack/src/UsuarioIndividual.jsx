import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

function UsuarioIndividual() {
  
    const usuario = (props) => {
        return <div>{props}</div> 
    }

    // navigate
    const navegar = useNavigate;

    // scroll animation 
    React.useEffect(() => {
        AOS.init()
    }, [])

    function borrarUsuario(idusuario) {
         axios.post('/api/usuario/borrar-usuario', {idusuario: idusuario})
            .then(res => {
                console.log(res.data);
                alert(res.data);

                navegar(0)
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    return(
        <div className='container'>
            
            <div className="row">

                <div className="col-sm-6 offset-3" data-aos="flip-right">

                    <ul className="list-group">
                        <li className="list-group-item">
                            {usuario.idusuario}
                        </li>
                        <li className="list-group-item">
                            {usuario.nombre}
                        </li>
                        <li className="list-group-item">
                            {usuario.email}
                        </li>
                        <li className="list-group-item">
                            {usuario.telefono}
                        </li>
                    </ul>

                    {/* <Link to={`/editar-usuario/${usuario.idusuario}`}><li className='btn btn-success'>Editar</li></Link>
                    */}


                    <Link to={`/editar-usuario/${usuario.idusuario}`}><li className="btn btn-success">Editar</li></Link>
                    
                    &nbsp;

                    <button className="btn btn-danger" onClick={() => { borrarUsuario(usuario.idusuario)}}>Borrar</button>

                    <hr className="mt-4" />

                </div>

            </div>

        </div>
    );
}

export default UsuarioIndividual