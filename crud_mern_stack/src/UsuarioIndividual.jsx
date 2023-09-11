import React from 'react';
import { Link } from 'react-router-dom';

function UsuarioIndividual() {
  
    const usuario = (props) => {
        return <div>{props}</div> 
    }

    return(
        <div className='container'>
            
            <div className="row">

                <div className="col-sm-6 offset-3">

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
                    <button className="btn btn-danger">Borrar</button>

                    <hr className="mt-4" />

                </div>

            </div>

        </div>
    );
}

export default UsuarioIndividual