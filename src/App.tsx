import React, { useState } from 'react';
import './App.scss';
import CPFInput from './components/CPFInput/CPFInput';
import CNPJInput from './components/CNPJInput/CNPJInput';



function App() {
  const [cnpj, setCnpj] = useState<string>("");

  return (
    <div className="App">

      <h1 className='igorbdev'>{"<IgorB-Dev />"}</h1>

      <CNPJInput name='cnpj' placeholder='CNPJ' value={cnpj} onChange={setCnpj} />

      <p style={{marginTop: 40}}></p>
      
    </div>
  );
}

export default App;
