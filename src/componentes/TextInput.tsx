import React from 'react'
import "./TextInput.styles.scss"

interface ITextInput {
  name: string,
  placeholder: string
}

const TextInput = ({name, placeholder}: ITextInput) => {
  return (
    <div className='TextInput'>
        <input className='input' id={name} placeholder={placeholder}/>
        <label className='label' htmlFor={name}>{placeholder}</label>
    </div>
  )
}

export default TextInput