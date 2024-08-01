import React from 'react'
import "./CPFInput.styles.scss"

interface ICPFInput {
    name: string,
    placeholder: string,
    value: string,
    onChange: (value: string) => void
}

const CPFInput = ({name, placeholder, value, onChange}: ICPFInput) => {

    const handleCpfChange = (e: string) => {
        let value = e.replace(/\D/g, ''); // Remove tudo que não é dígito
    
        if (value.length > 3) {
          value = value.replace(/^(\d{3})(\d)/, '$1.$2');
        }
        if (value.length > 6) {
          value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
        }
        if (value.length > 9) {
          value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
        }
    
        onChange(value);
      };
    
  return (
    <div className='CPFInput'>

        <input type="text" 
        className='input'
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleCpfChange(e.target.value)}
        maxLength={14}
        />

        <label className='label'>{placeholder}</label>

    </div>
  )
}

export default CPFInput