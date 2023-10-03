import React from 'react'
import ImgHeader from '../assets/ImgHeader/ImgHeader.png'
import '../Styles/style.scss'

const Header = () => {

    return (
            <div className='divHeaderContainer'>
                    <div className='divH3H4Header'>
                        <div className='divAnimation'>
                            <h3 id='h3Header' className='textoAnimation'>¡ Hola, soy Juan Sacco !</h3>
                        </div>
                        <div className='divAnimation'>
                            <h4 id='h4Header' className='textoAnimation2'>{'<'} Desarrollador Frontend {'/>'}</h4>
                        </div>
                    </div>
                <div>
                    <img className='imgHeader' src={ImgHeader} alt="Foto de perfil"/>
                </div>
            </div>
    )
}

export default Header

