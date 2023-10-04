import React from 'react'
import '../Styles/style.scss'

const Proyectos = () => {

    return (
        <div className="divProjectContainer">
            <h4>Proyectos</h4>
        <main class="page-content">
            <div class="card">
            <div class="content">
                <h2 class="title">La Parfumerie</h2>
                <p class="copy">Ecommerce - Context - Firebase - Vite - SASS puro, {'('}framework para los alerts - SweetAlert{')'}  </p>
                <button class="btn">ver proyecto</button>
            </div>
            </div>
            <div class="card">
            <div class="content">
                <h2 class="title">CRUD JSON SERVER</h2>
                <p class="copy">Linkea a GitHub p/ descargar el repositorio. Hace falta ejecutar el servidor de Vite y el servidor de la API falsa {'('}fake-api{')'} </p>
                <button class="btn">github</button>
            </div>
            </div>
            <div class="card">
            <div class="content">
                <h2 class="title">Hawaian</h2>
                <p class="copy">Ecommerce - Context - Firebase - Create-react-app - Sin Framework, CSS puro</p>
                <button class="btn">ver proyecto</button>
            </div>
            </div>
            <div class="card">
            <div class="content">
                <h2 class="title">Peliculas Clásicas</h2>
                <p class="copy">Buscador de películas y series - Context - Firebase - Create-react-app - CSS puro, {'('}frameworks Cattocss y Animate.style{')'}</p>
                <button class="btn">ver proyecto</button>
            </div>
            </div>
        </main>
    </div>
    )
}

export default Proyectos
