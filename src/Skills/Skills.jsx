import React from 'react'
import '../Styles/style.scss'
import ImgReact from '../assets/ImgSkills/react.png'
import JS from '../assets/ImgSkills/js.png'
import HTML from '../assets/ImgSkills/html.png'
import CSS from '../assets/ImgSkills/css.png'
import Boostrap from '../assets/ImgSkills/bootstrap.png'
import Github from '../assets/ImgSkills/github.png'
import SASS from '../assets/ImgSkills/sass.png'
import Babel from '../assets/ImgSkills/babel.png'
import Responsive from '../assets/ImgSkills/responsive.png'
import Firebase from '../assets/ImgSkills/firebase.png'
import Git from '../assets/ImgSkills/git.png'

const Skills = () => {

    return (
        <div id='skills' className='divSkillsContainer'>
            <h4>Skills</h4>
            <div className="listaSkills">
                <img className="react" src={ImgReact} alt="React Js"/>
                <hr />
                <img className="js" src={JS} alt="Java Script"/>
                <hr />
                <img className="html" src={HTML} alt="HTML"/>
                <hr />
                <img className="css" src={CSS} alt="CSS"/>
                <hr />
                <img className="boostrap" src={Boostrap} alt="Boostrap"/>
                <hr />
                <img className="github" src={Github} alt="Git Hub"/>
                <hr />
                <img className="sass" src={SASS} alt="SASS"/>
                <hr />
                <img className="babel" src={Babel} alt="Babel"/>
                <hr />
                <img className="git" src={Git} alt="Git"/>
                <hr />
                <img className="responsive" src={Responsive} alt="Responsive"/>
                <hr />
                <img className="firebase" src={Firebase} alt="firebase"/>
            </div>
        </div>
    )
}

export default Skills
