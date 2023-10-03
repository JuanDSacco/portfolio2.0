import React from 'react'
import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import NavBar from '../NavBar/NavBar'

const ContentContainer = () => {
    return (
        <div className='divContentContainer'>
            <div className='divCCHeader'>
                <Header/>
            </div>
            <hr />
            <div>
                <NavBar/>
            </div>
            <div className='divCCAboutMe'> 
                <AboutMe/>
            </div>
        </div>
    )
}

export default ContentContainer
