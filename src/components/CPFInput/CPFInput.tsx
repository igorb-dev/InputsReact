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
        //PRIMEIRO VAMOS REMOVER TUDO QUE NAO FOR DIGITO DO INPUT
        let value = e.replace(/\D/g, "");

        //AGORA VAMOS COLOCAR UM . QUANDO FOR MAIOR QUE 3 DIGITOS
       if(value.length > 3) {
        value = value.replace(/^(\d{3})(\d)/, "$1.$2")
       }

       //AGORA VAMOS COLOCAR O SEGUNDO .
       if (value.length > 6) {
        value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
       }

       //AGORA O TERCEIRO ., VAMOS APROVEITAR E COLOCAR O - TAMBÉM
       if (value.length > 9) {
        value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4")
       }

        onChange(value)
    }


  return (
    <div className='CPFInput'>

        <input type="text" 
        className='input'
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleCpfChange(e.target.value)}
        //DEFINIR O MAXIMO DE 14 CARACTERES XXX.XXX.XXX-XX
        maxLength={14}
        />

        <label className='label' htmlFor={name}>{placeholder}</label>

    </div>
  )
}

export default CPFInput