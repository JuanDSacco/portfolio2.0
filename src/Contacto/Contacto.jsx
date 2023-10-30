import React from 'react'
import CopiarEmail from '../ComponentsCopy/CopiarEmail'
import CopiarWpp from '../ComponentsCopy/CopiarWpp'

const Contacto = () => {

    const redirectToLinkedin = () => {
        window.location.href='https://www.linkedin.com/in/juan-d-sacco/'
    }

    return (
        <div id='contacto' className='divContactoContainer'>
            <h4>Contactame</h4>
            <ul className='ulContacto'>
                <li className='liContacto'><CopiarEmail/></li>
                <li className='liContacto'><i onClick={redirectToLinkedin} class="fa-brands fa-linkedin"></i></li>
                <li className='liContacto'><CopiarWpp/></li>
            </ul>
        </div>
    )
}

export default Contacto
