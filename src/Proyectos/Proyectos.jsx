import React from 'react'
import '../Styles/style.scss'

const Proyectos = () => {

    const redirectToPerfumes = () => {
        window.location.href='https://eccomerce-perfumes-vite-context.netlify.app/'
    }
    const redirectToCRUD = () => {
        window.location.href='https://github.com/JuanDSacco/crud-json-server'
    }
    const redirectToHawaian = () => {
        window.location.href='https://hawaian-ecommerce-context-responsive.netlify.app/'
    }
    const redirectToPelis = () => {
        window.location.href='https://peliculas-context-firebase.netlify.app/'
    }

    return (
        <div id='proyectos' className="divProjectContainer">
            <h4>Proyectos</h4>
        <main className="page-content">
            <div className="card">
            <div className="content">
                <h2 className="title">La Parfumerie</h2>
                <p className="copy">Ecommerce - Context - Firebase - Vite - SASS puro, {'('}framework para los alerts - SweetAlert{')'}  </p>
                <button onClick={redirectToPerfumes} className="btn">ver proyecto</button>
            </div>
            </div>
            <div className="card">
            <div className="content">
                <h2 className="title">CRUD JSON SERVER</h2>
                <p className="copy">Linkea a GitHub p/ descargar el repositorio. Es necesario ejecutar el servidor de la API falsa con el comando "fake-api"</p>
                <button onClick={redirectToCRUD} className="btn">github</button>
            </div>
            </div>
            <div className="card">
            <div className="content">
                <h2 className="title">Hawaian</h2>
                <p className="copy">Ecommerce - Context - Firebase - Create-react-app - Sin Framework, CSS puro</p>
                <button onClick={redirectToHawaian} className="btn">ver proyecto</button>
            </div>
            </div>
            <div className="card">
            <div className="content">
                <h2 className="title">Peliculas Clásicas</h2>
                <p className="copy">Buscador de películas y series - Context - Firebase - Create-react-app - CSS puro, {'('}frameworks Cattocss y Animate.style{')'}</p>
                <button onClick={redirectToPelis} className="btn">ver proyecto</button>
            </div>
            </div>
        </main>
    </div>
    )
}

export default Proyectos
