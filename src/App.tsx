import React, { useState } from 'react';
import './App.scss';
import TextInput from './components/TextInput/TextInput';
import CPFInput from './components/CPFInput/CPFInput';

function App() {
  const [cpf, setCPF] = useState<string>("")

  return (
    <div className="App">

      <h1 className='igorbdev'>{"<IgorB-Dev />"}</h1>

      <CPFInput name='cpf-input' placeholder='CPF' value={cpf} onChange={setCPF}  />

      <p style={{marginTop: 40}}>CPF: {cpf}</p>
      
    </div>
  );
}

export default App;
