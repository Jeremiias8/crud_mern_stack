import React from 'react'
import axios from 'axios'
import './App.css'

import AgregarUsuario from './AgregarUsuario'
import EditarUsuario from './EditarUsuario'
import ListaUsuario from './ListaUsuario'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
// const baseURL2 = "https://jsonplaceholder.typicode.com/posts";

function App() {
  
  // método get
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null; 

  // function guardarPost() {}

  // método post
  /* const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL2}/1`).then(response => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL2, {
        title: "Hi world !",
        body: "Using post with axios in React."
      })
      .then((response) => {
        setPost(response.data);
      });

      if (!post) return "No post !";
  } */

  return (
    <>
      <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="/">CRUD MERN Stack - Jere</a>
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

  <h1>WELCOME !</h1>

        <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<ListaUsuario />} exact></Route>
            <Route path='/agregar-usuario' element={<AgregarUsuario />} exact></Route>
            <Route path='/editar-usuario/:idusuario' element={<EditarUsuario />} exact></Route>
          </Routes>

        </BrowserRouter>


        <div className="container-fluid mt-4 mb-4 p-2 bg-body-secondary">
          <code>Método GET con Axios</code>

          <input type="text" className="form-control m-2" value={post} onChange={setPost} />

          <div className="mt-3 mb-3">
            <span>User Id: {post.userId}</span>
            &nbsp;
            <span>Id Post: {post.id}</span>
          </div>
          
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          
          <button className="btn btn-primary m-2">Añadir Post</button>
          <Link to='/editar-usuario/${usuario.idusuario}'><button className="btn btn-info m-2">Editar Post</button></Link> 
          <button className="btn btn-danger m-2">Borrar Post</button>
        </div>

        <div className="container-fluid mt-4 mb-4 p-2 bg-body-secondary">
          <code>Método POST con Axios</code>
          <h3>{}</h3>
          <p>{}</p>

          <button className="btn btn-secondary">Crear Post</button>
        </div>

        <p className="read-the-docs">
          Practising with React due to it is so much used it.
        </p>
      </div>
    </>
  )
}

export default App
