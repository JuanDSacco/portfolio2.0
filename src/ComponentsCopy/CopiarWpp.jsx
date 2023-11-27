import React from 'react';
import '../Styles/style.scss'

class CopiarWpp extends React.Component {
    redirigirAWhatsApp = () => {
        const telefono = '1134325690'; 

        
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefono}`;

        
        window.location.href = urlWhatsApp;
    };

    render() {
        return (
        <div>
            <span className='buttonWpp' onClick={this.redirigirAWhatsApp}><i class="fa-brands fa-whatsapp"></i></span>
        </div>
        );
    }
}

export default CopiarWpp;

