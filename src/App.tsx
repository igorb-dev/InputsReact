import React, { useState } from 'react';
import './App.scss';
import TextInput from './componentes/TextInput';

function App() {
  const [nome, setNome] = useState<string>("")

  return (
    <div className="App">

      <h1 className='igorbdev'>{"<IgorB-Dev />"}</h1>
      
        <TextInput name='name' placeholder='Nome Completo' value={nome} onChange={setNome} />

      <p style={{marginTop: 40}}>Texto do input: {nome}</p>

    </div>
  );
}

export default App;
