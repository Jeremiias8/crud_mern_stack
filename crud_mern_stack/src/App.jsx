// import { useState } from 'react'
import './App.css'

import AgregarUsuario from './AgregarUsuario'
import EditarUsuario from './EditarUsuario'
import ListaUsuarios from './ListaUsuario'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">CRUD MERN Stack - Jere</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="agregar-usuario">Agregar Usuario</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <h1>CRUD MERN STACK - WELCOME !</h1>

        <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<ListaUsuarios />} exact></Route>
            <Route path='/agregar-usuario' element={<AgregarUsuario />} exact></Route>
            <Route path='/editar-usuario' element={<EditarUsuario />} exact></Route>
          </Routes>

        </BrowserRouter>

      </div>
      <p className="read-the-docs">
        Practising with React due to it is so much used it.
      </p>

    </>
  )
}

export default App
