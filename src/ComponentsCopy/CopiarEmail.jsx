import React from 'react';

class CopiarEmail extends React.Component {
    copiarAlPortapapeles = () => {
        const tempInput = document.createElement('input');
        tempInput.value = 'juandsacco@gmail.com';
    
        document.body.appendChild(tempInput);
    
        tempInput.select();
        document.execCommand('copy');
    
        document.body.removeChild(tempInput);
    
        alert('Email copiado al portapapeles');
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