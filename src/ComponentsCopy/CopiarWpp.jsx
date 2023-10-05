import React from 'react';
import '../Styles/style.scss'

class CopiarWpp extends React.Component {
    redirigirAWhatsApp = () => {
        const telefono = '1134325690'; // Reemplaza con el número de teléfono que deseas

        // Crea la URL de WhatsApp con el número de teléfono
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefono}`;

        // Redirige al usuario a la URL de WhatsApp
        window.location.href = urlWhatsApp;
    };

    render() {
        return (
        <div>
            {/* Icono o botón para iniciar el chat de WhatsApp */}
            <span className='buttonWpp' onClick={this.redirigirAWhatsApp}><i class="fa-brands fa-whatsapp"></i></span>
        </div>
        );
    }
}

export default CopiarWpp;

