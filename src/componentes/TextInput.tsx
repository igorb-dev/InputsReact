import React from 'react'
import "./TextInput.styles.scss"

interface ITextInput {
  name: string,
  placeholder: string,
  value: string,
  onChange: (value: string) => void
}

const TextInput = ({name, placeholder, value, onChange}: ITextInput) => {
  return (
    <div className='TextInput'>
      <input
        className='input'
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className='label' htmlFor={name}>{placeholder}</label>
    </div>
  )
}

export default TextInput