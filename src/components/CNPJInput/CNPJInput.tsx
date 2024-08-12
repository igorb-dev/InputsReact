import React from 'react'
import "./CNPJInput.styles.scss"

interface ICNPJInput {
    name: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void
}

const CNPJInput = ({name, placeholder, value, onChange}: ICNPJInput) => {

    const handleCNPJChange = (e: string) => {
        // PRIMEIRO VAMOS REMOVER TUDO QUE NÃO FOR DÍGITO DO INPUT
        let value = e.replace(/\D/g, "");
    
        // AGORA VAMOS COLOCAR UM . QUANDO FOR MAIOR QUE 2 DIGITOS
        if(value.length > 2) {
            value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        }
    
        // AGORA VAMOS COLOCAR O SEGUNDO .
        if (value.length > 5) {
            value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        }
    
        // AGORA VAMOS COLOCAR A / QUANDO FOR MAIOR QUE 8 DIGITOS
        if (value.length > 8) {
            value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4");
        }
    
        // AGORA VAMOS COLOCAR O - QUANDO FOR MAIOR QUE 12 DIGITOS
        if (value.length > 12) {
            value = value.replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, "$1.$2.$3/$4-$5");
        }
    
        onChange(value);
    }
    


  return (
    <div className='CNPJInput'>

        <input type="text" 
        className='input'
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleCNPJChange(e.target.value)}
        //DEFINIR O MAXIMO DE 18 CARACTERES XX.XXX.XXX/XXXX-XX
        maxLength={18}
        />

        <label className='label' htmlFor={name}>{placeholder}</label>

    </div>
  )
}

export default CNPJInput