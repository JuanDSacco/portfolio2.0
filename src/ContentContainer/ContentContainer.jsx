import React from 'react'
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import NavBar from '../NavBar/NavBar'
import Proyectos from '../Proyectos/Proyectos'
import Skills from '../Skills/Skills'

const ContentContainer = () => {
    return (
        <div className='divContentContainer'>
            <div className='divCCHeader'>
                <Header/>
            </div>
            <div>
                <NavBar/>
            </div>
            <div className='divCCAboutMe'> 
                <AboutMe/>
            </div>
            <div className='divCCSkills'>
                <Skills/>
            </div>
            <div>
                <Proyectos/>
            </div>
        </div>
    )
}

export default ContentContainer
