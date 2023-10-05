import React from 'react';
import Swal from 'sweetalert2';

class CopiarEmail extends React.Component {
    copiarAlPortapapeles = () => {
        const tempInput = document.createElement('input');
        tempInput.value = 'juandsacco@gmail.com';
    
        document.body.appendChild(tempInput);
    
        tempInput.select();
        document.execCommand('copy');
    
        document.body.removeChild(tempInput);
    
        Swal.fire('¡Email copiado al portapapeles!')
        };
    
        render() {
        return (
            <div>
            <i className="fa-solid fa-envelope" onClick={this.copiarAlPortapapeles}></i>
            </div>
        );
        }
    }
    
    export default CopiarEmail;