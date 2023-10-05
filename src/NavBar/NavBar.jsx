import React from 'react'
import '../Styles/style.scss'

const NavBar = () => {

    return (
        <div className='divNavBar'>
            <section class="portfolio-experiment">
                <a href='#aboutMe'>
                    <span class="text">About Me</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
            </section>
            <section class="portfolio-experiment">
                <a href='#skills'>
                    <span class="text">Skills</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
            </section>
            <section class="portfolio-experiment">
                <a href='#proyectos'>
                    <span class="text">Proyectos</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
            </section>
            <section class="portfolio-experiment">
                <a href='#contacto'>
                    <span class="text">Contacto</span>
                    <span class="line -right"></span>
                    <span class="line -top"></span>
                    <span class="line -left"></span>
                    <span class="line -bottom"></span>
                </a>
            </section>
        </div>
    )
}

export default NavBar
